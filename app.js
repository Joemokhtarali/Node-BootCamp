const http = require('http') // http a core model that launchs a server , sends a request 

// function reqListner(req, res){

// }

const server = http.createServer((req, res) => {    // creates a server
    const url = req.url
    if(url === '/'){
        res.write('<html>')
        res.write('<body><h1>Main Page</h1></body>')
        res.write('</html>')
        return res.end() // adding return will stop and prevent other code to be excuted 
    }
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<body><h1>Not Main Page</h1></body>')
    res.write('</html>')
    res.end()
    // process.exit()  
})  

server.listen(3000)
// 
// node app.js to spin a server 
// Event Loop


// What I'v learned 
// How to write a server and how to spin it 
// setting headers 
// Routing 