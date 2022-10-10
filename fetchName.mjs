//WAP to display age according to the given name using async and await throught API call
import fetch from "node-fetch";
async function Age(argName){

  const responseObject = await fetch(`https://api.agify.io/?name=${name}`)
  const textData = await responseObject.text();
  const {age ,name} = textData;
  console.log(`Age of ${name} is :`,age);
}
Age(argName);

  
