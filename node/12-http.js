const http = require("http");

const server = http.createServer((req, res)=>{
    if(req.url === "/")
    {
        res.end("Welcome to home page.");
    }

    if(req.url === "/about")
    {
        res.end("this is about page.");
    }
    
    res.end(`
    <h1>Oops!</h1>
    <p>It seems we couldn't find the page you are requesting for.</p>
    <a href="/">back to home page</a>
    `);
});

// using Event Emitter API
// const server = http.createServer();

// server emits request event whenever request hits the port server is listening to 

// server.on("request", (req, res) => {
//     res.end("sending response...");
// })


server.listen(5000);