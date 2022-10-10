//WAP to display age according to the given name using async and await throught API call
import fetch from "node-fetch";
async function Age(argname){

  const responseObject = await fetch(`https://api.agify.io/?name=${argname}`)
  const result = await responseObject.json();
  const {age ,name} = result;
  console.log(`Age of ${name} is :`,age);
}
Age("Samiksha");



  
