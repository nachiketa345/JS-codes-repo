//ALL Primitive type data types gets their value stored inside STACK
//All Reference type data types gets their value stored inside HEAP

//Primitive Type

let value01  = 10;
let value = value01;
value01=20
console.log(value);
console.log(value01);

//In the above example value01 changes to 20 but  value remains 10 
//because value01 is a primitive type and gets its value stored inside STACK
//only a copy of value01 is given  to value and hence when value01 changes 
//value remains the same

let  value02 = [10,20,30];
let value03 = value02;
value02.push(40)
console.log(value03);
//In the above example value03 changes to [10,20,30,40]
//because value02 is a reference type and gets its value stored inside HEAP
//only a reference of value02 is given to value03 and hence when value02 changes
//value03 also changes

