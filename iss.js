const request = require('request');
const ipifyUrl = 'https://api.ipify.org/?format=json';

//function to fetch ip address
const fetchMyIP = (callback) => {
  request(ipifyUrl, (error, response, body) => {
    if (error) return callback(error, null);


    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    
    const IP = JSON.parse(body).ip;
    return callback(null, IP);
  });
};

//function to fetch coordinates of ip address
const fetchCoordsByIP = (ip, callback) => {
  request(`https://freegeoip.app/json/${ip}`, (error, response, body) => {
    if (error) return callback(error, null);

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordinates. Response: ${body}`;
      return callback(Error(msg), null);
    }

    const { latitude, longitude } = JSON.parse(body);

    return callback(null, { latitude, longitude });
  });
};

const fetchISSFlyOverTimes = (coords, callback) => {
  const flyOverUrl = `https://iss-pass.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`;

  request(flyOverUrl, (error, response, body) => {
    if (error) return callback(error, null);

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching flyover times. Response: ${body}`;
      return callback(Error(msg), null);
    }

    const flyOverTimes = JSON.parse(body).response;
    return callback(null, flyOverTimes);
  });
};

const nextISSTimesForMyLocation = (callback) => {
  fetchMyIP((error, ip) => {
    if (error) {
      console.log(`It didn't work!` , error);
      return;
    }
    fetchCoordsByIP(ip, (error, coords) => {
      if (error) {
        console.log(`It didn't work!`, error);
        return;
      }
      fetchISSFlyOverTimes(coords, (error, data) => {
        if (error) {
          console.log(`It didn't work!`, error);
          return;
        }
        return callback(null, data);
      });
    });
  });
};

module.exports = {
  fetchMyIP,
  fetchCoordsByIP,
  fetchISSFlyOverTimes,
  nextISSTimesForMyLocation
};