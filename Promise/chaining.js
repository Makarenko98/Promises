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

var p = Div(20, 4).then(result => {
    console.log(result)
    return result;
}).then(
    result => {
        console.log(result * 2);
        throw Error("error in 2-nd then");
        return new Promise(
            (resolve, reject) => {
                setTimeout(function () {
                    resolve("2-nd then")
                }, 2000);
            }
        );
    }
);p.then(
    result => {
        console.log(result)
    }
).catch(err => console.log("error: " + err));

console.log("main")