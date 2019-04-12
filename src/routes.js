const express = require('express');
const routes = express.Router();
const BoxController = require('./controllers/BoxController');

//get post put delete
routes.post('/boxes', BoxController.store);

module.exports = routes;