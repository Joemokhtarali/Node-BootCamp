const http = require('http') // http a core model that launchs a server , sends a request 
const fs = require('fs')
// function reqListner(req, res){

// }

const server = http.createServer((req, res) => {    // creates a server
    const url = req.url
    const method = req.method
    if(url === '/'){
        res.write('<html>')
        res.write('<body>')
        res.write('<h1>Main Page</h1>')
        res.write('<form action="/message" method="POST"> <input type="text" name="message"></input><button>Submit</button></form> ')
        res.write('</body>')
        res.write('</html>')
        return res.end() // adding return will stop and prevent other code to be excuted 
    }
    if(url === '/message' && method === 'POST'){
        const body = []
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk)
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            // console.log(parsedBody);
            const message = parsedBody.split('=')[1]
            fs.writeFileSync('message.txt', 'Message')
        })
        res.statusCode = 302
        res.setHeader('Location', '/')
        return res.end()
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
// Redirecting Requests
// Parsing Request Bodies