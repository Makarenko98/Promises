var Promise = require("bluebird");
var fs = Promise.promisifyAll(require("fs"));

var arr = ["1.js", "2.js", "3.js"];

Promise.map(arr, (item) => fs.readFileAsync(item)).then(() => console.log("done"));
