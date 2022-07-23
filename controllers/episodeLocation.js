const { request, response } = require("express");
const axios = require('axios');


const episodeLocationByid = async ( req = request, res = response) => {

    const {episode} = req.params;

    await axios.get(`${process.env.API}/episode/${episode}`)
    .then(async (response) => {
        
      const allChar = response.data.characters;
      const episodeName = response.data.name;
      const episodeCode = response.data.episode;

      let locations= [];
     
      for(let i=0; i<allChar.length; i++){
        await axios.get(allChar[i])
        .then(async (response) => {
            locations.push(
                //name:response.data.name,
                response.data.origin.name
            );
        })
      }

      
      return res.status(200).json({
          name: episodeName,
          episode : episodeCode,
          locations: filterLocations(locations)
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

const filterLocations = (lista) => {
    return lista.filter(onlyUnique)
}


function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

module.exports = {
    episodeLocationByid
};