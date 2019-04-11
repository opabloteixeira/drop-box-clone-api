const express = require('express');

const routes = express.Router();

routes.get('/teste', (req, res) => { // função interceptadora 
    return res.send("Hello world"); 
});

module.exports = routes;