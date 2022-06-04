const express = require("express");
const path = require("path");

// express app 
const app = express();

// setup static and middleware
app.use(express.static("./public"));

// app.get("/", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "./http-server/demo.html"));
//     // adding index.html to static assets i.e. public folder
//     // server side rendering // templating engine
// })

app.all("*", (req, res) => {
    res.status(404).send("<h2>resource not found!</h2>");
})

// listening to port 
const port = 5010;
app.listen(port, ()=> {
    console.log("listening to port", port);
})