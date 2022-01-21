//helper function to convert Unix timestamp into useable date:
const printPassTimes = (passTimes) => {
  for (const pass of passTimes) {
    const date = new Date(pass.risetime * 1000);
    const riseTime = date.toString();
    const duration = pass.duration;

    console.log(`Next pass at ${riseTime} for ${duration} seconds!`);
  }
};

module.exports = { printPassTimes };