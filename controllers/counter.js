
const { request, response } = require("express");
//const { counter } = require("../models/counter");

const axios = require('axios');
const { format } = require("morgan");


const counterGetByLetter = async ( req = request, res = response) => {
    const t1Start = Date.now();

    const {entity, letter} = req.params;
    const newLetter = letter.toLowerCase();

    await axios.get(`${process.env.API}/${entity}`)
    .then(async (response) => {
        
      const allChar = response.data;
      const pages = allChar.info.pages;

      let allNames=[];
      for(let i=0; i<pages; i++){
        await axios.get(`${process.env.API}/${entity}?page=${i}`)
        .then((res) => {
            for(let j=0; j < res.data.results.length; j++){
                allNames.push(res.data.results[j].name);
            }
        })
      }

      
      const filterNames = include(allNames, newLetter);
      const count = counter(filterNames, newLetter);


      const t1End = Date.now();
      const time = formatTime((t1End - t1Start)/1000)

      return res.status(200).json({
          entity: entity,
          letter: letter,
          count: count,
          time: time
      });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      return res.status(404).json({
        msg:'entity not found'
      });
    })
}


const include = (allNames, newLetter) => {
    let filterNames = [];

    for(let i=0; i < allNames.length; i++){
        if(allNames[i].toLowerCase().includes(newLetter)){
            filterNames.push(allNames[i]);
        }
    }
    return filterNames;
}

const counter = (filterNames, letter) => {
    let count=0;
    for(let i=0;i < filterNames.length; i++){
        filterNames[i] = filterNames[i].toLowerCase();
        for(let j=0; j< filterNames[i].length; j++){
            if(filterNames[i][j] == letter){
                count++;
            }
        }
    }
    return count;
}

const formatTime = (time) => {
    let seg = Math.trunc(time);
    let ms = Math.trunc((time-seg)*1000);
    return `${seg}seg ${ms}ms`;
}


module.exports = {
    counterGetByLetter,
}