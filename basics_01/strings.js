//sting concatenation

console.log("Hello, " + "world!")



//string interpolation

const user = 'Nash'
const age = '29'
console.log(`This is ${user} and his age is ${age}`);

//string manipulation examples
//declare a new string
const str = new String('Nachiketa')

console.log(str.substring(0,5));
console.log(str.slice(0,5));
console.log(str.slice(-5));
console.log(str.slice(0,-5));
console.log(str.indexOf('a'));
console.log(str.lastIndexOf('a'));
console.log(str.replace('a','A'));
console.log(str.replace(/a/g,'A'));

const str1='     NAMCDE   '
console.log(str.trim(2));
console.log(str1.trimStart());
console.log(str1.trimEnd());

const str2 = 'ALPHANUM'
console.log(str2.includes('P'));
console.log(str2.startsWith('A'));
console.log(str2.endsWith('E'));

const str4 = 's h h h h'
console.log(str4.split( ));
console.log(str4.split(' '));
console.log(str4.split(' ',2));

console.log(str.blink());

console.log(str.bold());
console.log(str.fontcolor('red'));
console.log(str.fontsize(5));
console.log(str.big());







//string methods












