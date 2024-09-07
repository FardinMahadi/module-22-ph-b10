function inchToFeet(inch) {
  if (inch % 12 == 0) {
    return `${inch / 12}'`;
  } else {
    let feet = Math.floor(inch / 12);
    return `${feet}'${inch % 12}"`;
  }
}

function mileToKilometer(mile) {
  return mile * 1.609344;
}

console.log(inchToFeet(66));
console.log(mileToKilometer(5));
