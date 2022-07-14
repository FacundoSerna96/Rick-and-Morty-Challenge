require('dotenv').config();

const server = require('./models/server');
const myServer=  new server();

myServer.listen();