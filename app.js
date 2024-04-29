//import expres
const express = require("express")
//import path
const path = require("path")
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//create express instance
const app = express()
//index router
const indexRoute = require("./routes/index")


//view engine setup
app.set(`views`, path.join(__dirname, `views`))
app.set(`view engine`, `hbs`)

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//use routes
app.use("/", indexRoute)
//export app
module.exports = app
