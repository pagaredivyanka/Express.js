const express = require('express')
const studecontroller = require('./Controller')
const route = express.Router()

route.get('/findall',studecontroller.showdetail)


module.exports = route