// const http = require("http"); // http a core model that launchs a server , sends a request
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use("/add-product", (req, res, next) => {
  // res.send('<h1> Add Product</h1>'); // we could send HTML tags, files, or functions
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit" >Add Product</button></input></form>'
  );
  // next() // Allows the request to continue to the next middleware in Line
  // don't call next to other routes
});

app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Main Page</h1>"); // we could send HTML tags, files, or functions
});
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
