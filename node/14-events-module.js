const EventEmitter = require("events");

const customEmitter = new EventEmitter(); // new instance of EventEmitter

customEmitter.on("response", (name, age) => {
    console.log(`response event emitted! by user ${name} of age ${age}`);
});

customEmitter.on("response", () => {
    console.log("some other logic for event response!");
});

customEmitter.emit("response", "dhirendra", 24);
