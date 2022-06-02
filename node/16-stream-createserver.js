const http = require("http");
const fs = require("fs");

const server = http.createServer();

// whenever request is made, request event is emitted
server.on("request", (req, res) => {
    const fileStream =  fs.createReadStream("./content/result-util.txt");
    fileStream.on("open", () => {
        fileStream.pipe(res);
    })
});


const port = 5010;
server.listen(port, ()=>{
    console.log("listening on port", port);
})