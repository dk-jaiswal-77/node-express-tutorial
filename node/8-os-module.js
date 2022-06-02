const os = require("os");

// info about current user // os.userInfo()
const user = os.userInfo();
console.log(user);

// system uptime in seconds // os.uptime()
console.log(`system uptime is ${os.uptime()} seconds.`);

// info about current os
const currentOS = {
    type : os.type(),
    release : os.release(), 
    totalMemory : os.totalmem(), 
    freeMemory : os.freemem()
}

console.log(currentOS);