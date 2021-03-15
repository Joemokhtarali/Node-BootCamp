const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')
// const http = require("http"); // http a core model that launchs a server , sends a request
const express = require("express");
const path = require('path')

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminData.routes)
app.use(shopRoutes)
app.use(express.static(path.join(__dirname, 'public'))); // for CSS


app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page Not Found'})
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
    // res(app.use(routes)).get('/').end() 
})


app.set('view engine' , 'ejs') // adding ejs 
app.set('views' , 'views')



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


// npm i --save ejs pug express-handlebars 
// pug package to render dynamic templets => app.set('view engine' , 'pug') && app.get()
// creating pug pages and using render 
// app.render

//layouts => create a layout folder, main-layout.pug .. element that are dynamic use 'block' for hooks  -> styles && content block content 
// remove all and add: extends layouts/main-layout.pug 
// block content && indent and add ur code  
// npm install --save express-handlebars@3.0
// handlebars => change to app.js 
// const expressHbs = require('express-handlebars')
// app.engine('handlebars', expressHbs()) expressHbs is a function 