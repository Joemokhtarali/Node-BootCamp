const http = require('http') // http a core model that launchs a server , sends a request 
const routes = require('./routes')
// function reqListner(req, res){

// }

// const server = http.createServer((req, res) => {    // creates a server
//     routes
//     // process.exit()  
// })  
const server = http.createServer(routes)

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