const {readFile, writeFile} = require("fs").promises;
const util = require("util");

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const readAndWrite = async () => {
    try{
        const first = await readFile("./content/first.txt", "utf8");
        const second = await readFile("./content/second.txt", "utf8");
        await writeFile("./content/result-util.txt", `This is awesome : ${first} ${second}`, {flag : "a"});
        return "done"; 
    }catch(error){
        console.log(error);
        return error;
    }   
}

readAndWrite()
    .then(value => {console.log("promise resolved: ", value)})
    .catch(error => {console.log("error :", error)});