function Div(a, b) {
    return new Promise(
        (resolve, reject) => {
            setTimeout(function () {
                if (b == 0)
                    reject("Divide by zero");
                else
                    resolve(a / b);
            }, 2000);
        }
    )
}

Div(20, 4).then(
    result => {
        console.log(result);
    },
    err => {
        console.log(err);
    }
)


Div(20, 0).then(
    result => {
        console.log(result);
    },
    err => {
        console.log(err);
    }
)

console.log("123");