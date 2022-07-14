const express = require('express')
let cors = require('cors');


class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            
        }

        this.middlewares();
        this.route();
    }




    middlewares(){
        //CORS
        this.app.use(cors())

        //Parseo y lectura del body
        this.app.use(express.json());
    }

    route(){
   
    }

    listen(){
        this.app.listen(this.port   , () =>{
            console.log('Listening at', this.port);
        }) 
    }

}


module.exports = Server;