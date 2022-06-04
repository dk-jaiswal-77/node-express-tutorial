const http = require("http");
const {readFileSync} = require("fs");

const homePage = readFileSync("./demo.html");
const homePageStyles = readFileSync("./demo.css");

const server = http.createServer((req, res) => {
    if(req.url == "/")
    {
        // home page
        res.writeHead(200, {"Content-Type" : "text/html"}); // writing response header
        // res.write("<h1>home page</h1>"); // writing response body
        res.write(homePage);
        res.end(); // terminating connection
    }
    else if(req.url == "/contact")
    {
        // contact page 
        res.writeHead(200, {"Content-Type" : "text/html"});
        res.write("<h1>contact page</h1>")
        res.end();
    }
    else if(req.url == "/demo.css")
    {
        // home page styles
        res.writeHead(200, {"Content-Type" : "text/css"});
        res.write(homePageStyles);
        res.end();
    }
    else{
        // not found 
        res.writeHead(404, {"Content-Type" : "text/html"});
        res.write("<h1>page not found!</h1>")
        res.end();
    }
});

server.listen(5010);