async function GetPromise(timeout, str) {
    // return new Promise((resolve, reject) => {
    //     setTimeout(function () {
    //         console.log(str)
    //     }, timeout);
    // })
    for(var i =0;i < 10000000;i++){

    }
    console.log(str);
}

async function asyncFunc(param) {
    await GetPromise(2000,"asdasd");
    await GetPromise(1000,"qweqwe");
}

asyncFunc();

console.log("main");