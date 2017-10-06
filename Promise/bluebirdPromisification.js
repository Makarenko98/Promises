var Promise = require("bluebird");
// var fs = require("fs");
var fs = Promise.promisifyAll(require("fs"));

// fs.readFileAsync("1.js").then(console.log);


// var promised = Promise.promisify(fs.readFile);

// promised("1.js").then(console.log);
console.log(fs.readFileSyncAsync("1.js"));