function Div(a, b,timeout) {
    return new Promise(
        (resolve, reject) => {
            setTimeout(function () {
                if (b == 0)
                    reject("Divide by zero");
                else
                    resolve(a / b);
            }, timeout);
        }
    )
}

Promise.race(
    [
        Div(20, 4, 2000),
        Div(20, 5, 3000),
        Div(20, 6, 1000),
    ]
).then(
    result => {
        console.log(result);
    },
    err => {
        console.log(err);
    }
)