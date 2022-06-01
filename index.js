const axios = require('axios').default;

// Make a request for a user with a given ID
axios.get('https://s3.us-west-2.amazonaws.com/')
  .then(function (response) {
    // handle success
    console.log('retorno',response.data);
    console.log('status',response.status)
  })
  .catch(function (error) {
    // handle error
    console.log('retorno',error.response.data);
    console.log('status',error.response.status)
  })
  .then(function () {
    // always executed
  });