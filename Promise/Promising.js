var fs = require('fs')

var prom = new Promise((resolve , reject)=>{
    fs.readFile("1.js", (err, data) => {
        if(err) return reject(err);

        return resolve(data);
    });
}).then(
    console.log,
    console.error
)