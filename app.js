const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
// const http = require("http"); // http a core model that launchs a server , sends a request
const express = require("express");
const path = require('path')

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes)
app.use(shopRoutes)

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
    // res(app.use(routes)).get('/').end() 
})



// function reqListner(req, res){

// }

// const server = http.createServer((req, res) => {    // creates a server
//     routes
//     // process.exit()
// })
// const server = http.createServer(app)

// server.listen(3000)
//
app.listen(3000); // creates server
// node app.js to spin a server
// Event Loop

// What I'v learned
// How to write a server and how to spin it
// setting headers
// Routing
// Redirecting Requests
// Parsing Request Bodies
// using the Node Modules system
// introducing NPM  npm init  && add script:  "start": "node app.js"
// adding 3rd party package, npm i nodemon --save-dev => change start script to "nodemon app.js"

//                  Express
// get rid of Routes.js
// npm install express --save
// import express = require('express')
// middlewares using app.use => takes req, res and next function
// app.send() could take HTML, files, or functions
// shorten the http.create to app.listen(port)
// handling different routes using express :

// to install a parser for the body => npm i --save body-parser
// import body-parser and npm i --save body-parser 

// editing middlewares, instead of app.use => app.get() for get requests && app.post of Post requests 
// handling get & post requests by creating routes folder & sending express.Router()

// handling 404 errors => 
