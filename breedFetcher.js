const request = require('request');
const args = process.argv.slice(2);
let breedName = args[0];
let uRL = 'http://api.thecatapi.com/v1/breeds/search?q='
const path = uRL + breedName;




request(path, (error, response, body) => {
  if(error) {
    console.log('Error:', error);
    return
  }
  console.log('statusCode:', response && response.statusCode);
  
  // console.log("error:", error);
  // console.log('body:', body);
  // console.log(typeof body)
  const data = JSON.parse(body);
  // console.log(data);
  console.log(data[0].description);
});