const {createReadStream} = require("fs");

const stream = createReadStream("./content/result-util.txt", {highWaterMark : 9000, encoding : "utf8"});

// default buffer size = 64kb
// last buffer --> remainder
// highWaterMark --> controls buffer size


stream.on("data", chunk => {
    console.log(chunk);
})

stream.on("error", error => {
    console.log(error);
});

// stream.on("end", () => {
//     console.log("streaming completed");
// })