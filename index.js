// const { fetchMyIP, fetchCoordsByIP } = require('./iss');
// const { fetchCoordsByIP } = require('./iss');
// const { fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');
const { printPassTimes } = require('./printPassTimes');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP('24.85.160.23', (error, coords) => {
//   if (error) {
//     console.log('Error!', error);
//     return;
//   }
//   console.log(`It worked! Fetching coordinates...\n`, coords);
// });

// fetchISSFlyOverTimes({latitude: '49.6979', longitude: '-123.1552'}, (error, data) => {
//   if (error) {
//     console.log('Error!', error);
//     return;
//   }
//   console.log(`It worked! Flyover times:`, data);
// });

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) return console.log("It didn't work!", error);
  printPassTimes(passTimes);
});