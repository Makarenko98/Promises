// Промис выполнится сразу же
var promise = new Promise((resolve, reject) => resolve(1));

promise.then( function f1(result) {
  console.log("f1 " + result); // 1
  return 'f1';
})

promise.then( function f2(result) {
    console.log("f2 " + result); // 1
  return 'f2';
})