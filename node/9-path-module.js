const path = require("path");

// platform specific path separator // path.sep
console.log(path.sep); // "/"

// joins sequence of path segments // path.join()
const filePath = path.join("content", "subfolder", "test.txt");
console.log(filePath);

// getting basename of path // path.basename() 
console.log(path.basename(filePath)); // last part of path

// returns an absolute path resolving sequence of path segments
const absolutePath = path.resolve(__dirname, "./content", "subfolder", "test.txt");
console.log(absolutePath);