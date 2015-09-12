var express = require('express');
var controller = express.Router();

var countryModel = require('../models/Country');
var bodyParser = require('body-parser');

/* API */

// get all countries
controller.get('/', function(req, res, next) {

  countryModel.find(function(error, countries) {
    if (error) return error;
    res.json(countries);
  });
});

module.exports = controller;