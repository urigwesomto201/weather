const weatherrouter = require("express").Router();
const {weather} = require('../controller/weather')

weatherrouter.get("/weather",weather)

module.exports = weatherrouter;