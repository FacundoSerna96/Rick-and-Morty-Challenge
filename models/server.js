const express = require('express')
let cors = require('cors');


class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            counter :     '/api/counter',
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
        this.app.use(this.paths.counter, require('../routes/counter'));
    }

    listen(){
        this.app.listen(this.port, () =>{
            this.title();
        }) 
    }

    title(){
        console.log(` ██████ ██   ██ ██ ██████   █████  ██   ██ 
██      ██   ██ ██ ██   ██ ██   ██  ██ ██  
██      ███████ ██ ██████  ███████   ███   
██      ██   ██ ██ ██      ██   ██  ██ ██  
 ██████ ██   ██ ██ ██      ██   ██ ██   ██

░█▀▄░▀█▀░█▀▀░█░█░░░█▀█░█▀█░█▀▄░░░█▄█░█▀█░█▀▄░▀█▀░█░█░░░█▀▀░█░█░█▀█░█░░░█░░░█▀▀░█▀█░█▀▀░█▀▀
░█▀▄░░█░░█░░░█▀▄░░░█▀█░█░█░█░█░░░█░█░█░█░█▀▄░░█░░░█░░░░█░░░█▀█░█▀█░█░░░█░░░█▀▀░█░█░█░█░█▀▀
░▀░▀░▀▀▀░▀▀▀░▀░▀░░░▀░▀░▀░▀░▀▀░░░░▀░▀░▀▀▀░▀░▀░░▀░░░▀░░░░▀▀▀░▀░▀░▀░▀░▀▀▀░▀▀▀░▀▀▀░▀░▀░▀▀▀░▀▀▀`);
                    console.log('           Listening at', this.port,'!');
    }

}


module.exports = Server;