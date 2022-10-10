import fs from'fs';
function callbackFunc(myResolve, myReject) {
  const content = "Hello World";
  fs.writeFile("text.txt", content, (err) => {
    // If error throw err.
    if (err) throw err;
  });
}

let myPromise = new Promise(callbackFunc);

myPromise
  .then(function (value) {
    console.log("The promise fullfilled: ", value);
  })
  .catch(function (err) {
    console.log("There was an error");
  });
