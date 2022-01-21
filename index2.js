const { nextISSTimesForMyLocation } = require('./iss_promised');
const { printPassTimes } = require('./printPassTimes');

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });

// const { fetchMyIP } = require('./iss_promised');
// const { fetchCoordsByIP } = require('./iss_promised');
// const { fetchISSFlyOverTimes } = require('./iss_promised');

// fetchMyIP()
//   .then(fetchCoordsByIP) //provide fetchCoordsByIP as a callback to fetchMyIP. will run after fetchMyIP.
//   .then(fetchISSFlyOverTimes)
//   .then(body => console.log(body));

