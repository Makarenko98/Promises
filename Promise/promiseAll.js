function Div(a, b) {
    return new Promise(
        (resolve, reject) => {
            setTimeout(function () {
                if (b == 0)
                    reject(new Error("Divide by zero"))
                else
                    resolve(a / b);
            }, 2000);
        }
    )
}

Promise.all(
    [
        Div(20, 4),
        Div(20, 5),
        Div(20, 6),
    ]
).then(
    results => {
        console.log(results);
        throw new Error("then error")
        return results[0];
    }
).then(result =>{
    console.log(result);
})
.catch(err => console.log("err: " + err))