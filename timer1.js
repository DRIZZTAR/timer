const args = process.argv.slice(2); // Get command line arguments after node and script name

const beepTime = function(seconds) {
  if (!isNaN(seconds) && seconds >= 0) { //if arguments are a number and greater than or equal to 0 seconds
    setTimeout(() => {
      process.stdout.write('\x07'); // Here's the beep!
    }, seconds * 1000); // convert the argument given in seconds to milliseconds
  }
};

//loop through the arguments given
for (const arg of args) {
  //using parseInt to convert string to numbers
  const seconds = parseInt(arg);
  //passing command line arguments to beepTime
  beepTime(seconds);
}
