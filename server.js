'use strict';

const express = require('express');
const server = express();
const PORT = process.env.PORT || 5501;

server.use(express.static('./public'))

server.get('/test', (request,response) =>{
    response.send("working");
});

server.listen(PORT,()=> console.log("heloooooooo"));
