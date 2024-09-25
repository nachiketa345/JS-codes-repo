let myDate =  new Date();

console.log(myDate.toDateString());
console.log(myDate.toJSON());                //DATE is an object
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());



let newDate =new Date(2023,0,10);
console.log(newDate);

let  newDate2 = new Date(2023,0,10,10,10,10);
console.log(newDate2);


let newDate3=new Date("2023-11-9")
console.log(newDate3);


let newDate4 = Date.now()
console.log(newDate4);
console.log(newDate4.toLocaleString());

let forTime = new Date()
console.log(forTime.getTime());
console.log(forTime.getDay());

console.log(forTime.toLocaleString('default',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',

}))

