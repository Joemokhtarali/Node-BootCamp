const http = require('http') // http a core model that launchs a server , sends a request 

// function reqListner(req, res){

// }

const server = http.createServer((req, res) => {    // creates a server
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<body><h1>Hello</h1></body>')
    res.write('</html>')
    res.end()
    // process.exit()  
})  

server.listen(3000)
// 
// node app.js to spin a server 
// Event Loop