const request = require('request');




const fetchBreedDescription = function(breedName, callback) {
  const path = 'http://api.thecatapi.com/v1/breeds/search?q='
  const URL = path + breedName;

  request(URL, (error, description, body) => {
    
    if(error) {
      callback(error, null);
    } else if (body){
      const data = JSON.parse(body);

      if(data.length === 0) {
        callback(error, null)
      } else {
        let description = data[0].description
        callback(null, description)
      }
      
    }


    
    
    // console.log("error:", error);
    // console.log('body:', body);
    // console.log(typeof body)
    // console.log(data);
    // console.log(data[0].description);
  });

}

module.exports = {
  fetchBreedDescription
}