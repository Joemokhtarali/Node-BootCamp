const http = require('http') // http a core model that launchs a server , sends a request 
const express = require('express')
const app = express ()

app.use((req, res, next) => {
    console.log('In the middleware!')
    next() // Allows the request to continue to the next middleware in Line 
})

app.use((req, res, next) => {
    console.log('In the middleware!')
    res.send('<h1>Hello</h1>'); // we could send HTML tags 

})
// function reqListner(req, res){

// }

// const server = http.createServer((req, res) => {    // creates a server
//     routes
//     // process.exit()  
// })  
const server = http.createServer(app)
 
server.listen(3000)
// 
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
