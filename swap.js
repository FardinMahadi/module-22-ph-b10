let a = 6;
let b = 7;

console.log(a, b);

let temp = a;
a = b;
b = temp;

console.log(a, b);

console.log("---");
let x = 2,
  y = 9;

console.log(x, y);
[x, y] = [y, x];
console.log(x, y);
