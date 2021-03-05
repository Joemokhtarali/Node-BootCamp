const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<body>");
    res.write("<h1>Main Page With Nodemon</h1>");
    res.write(
      '<form action="/message" method="POST"> <input type="text" name="message"></input><button>Submit</button></form> '
    );
    res.write("</body>");
    res.write("</html>");
    return res.end(); // adding return will stop and prevent other code to be excuted
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (error) => {
      // console.log(parsedBody);
    });
            res.statusCode = 302;
            // res.setHeader("Location", "/");
            return res.end();
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<body><h1>Not Main Page</h1></body>");
  res.write("</html>");
  res.end();
};

module.exports = requestHandler;