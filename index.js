// Code your solution in this file!


function distanceFromHqInBlocks(someValue) {
  // returns the number of blocks given a value
  return Math.abs(someValue - 42);
}

function distanceFromHqInFeet(someValue) {
  // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
  // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, destination) {
  // returns the number of feet traveled
  return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}

// Example usage of the functions
const pickupLocation = 36;
const destinationLocation = 50;

console.log(distanceFromHqInBlocks(pickupLocation)); // Output: 6
console.log(distanceFromHqInFeet(pickupLocation)); // Output: 1584
console.log(distanceTravelledInFeet(pickupLocation, destinationLocation)); // Output: 4224
console.log(calculatesFarePrice(pickupLocation, destinationLocation)); // Output: 8.48
