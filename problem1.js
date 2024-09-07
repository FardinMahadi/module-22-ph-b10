function inchToFeet(inch) {
  if (inch % 12 == 0) {
    return `${inch / 12}'`;
  } else {
    return `${Math.floor(inch / 12)}'${inch % 12}"`;
  }
}

function mileToKiloMeter(mile) {
  return mile * 1.609344;
}

console.log(inchToFeet(66));
console.log(mileToKiloMeter(5));
