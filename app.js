const http = require('http') // http a core model that launchs a server , sends a request 

// function reqListner(req, res){

// }

const server = http.createServer((req, res) => {
    console.log(req)
}) // creates a server 

server.listen(3000)