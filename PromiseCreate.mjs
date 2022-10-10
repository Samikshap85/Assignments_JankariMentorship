const fs = require('fs'); //importing filesystem module in node.js which allows us to access the file system , read write to files , access folder and many more

function callbackFunc(myResolve , myReject){
const content = "Hello I am Samiksha and I am writing a text to a file using Promises";

//if(content == "Hello I am Samiksha and I am writing a text to a file using Promises")
fs.writeFile('text.txt' , content , err =>{
  //myResolve("Ok");
  if(err){
    myReject("Could not write");
    return;
  }
});
