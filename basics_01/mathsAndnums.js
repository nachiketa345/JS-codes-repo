const num = new Number(1000.3233)


console.log(num.toFixed(2));
console.log(num.toPrecision(5));

const score=10000000;
console.log(score.toLocaleString('en-Ch'));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER); 

//********************************************************** *


console.log(Math.PI);
console.log(Math.abs(-5));
console.log(Math.ceil(3.2));
console.log(Math.floor(3.8));
console.log(Math.round(3.8));
console.log(Math.pow(2, 3));
console.log(Math.sqrt(16));
console.log(Math.max(1, 2, 3, 4, 5))

const max=20
const min=10
console.log(Math.floor(Math.random()*(max-min))+min)
