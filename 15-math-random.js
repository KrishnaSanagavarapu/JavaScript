// how to produce a random number


let rand = Math.random();

console.log(rand);

// it will produce 0 to 1  excluding 1

// anything less than 1 and greater than 0

// how to create integers

// 


let rand1 = Math.random()*100;

console.log(rand1);



let rand2 = Math.floor(Math.random()*100);

console.log(rand2);



let rand23 = Math.floor(Math.random()*2);

console.log(rand23);

// how to produce random number between a range

let max =6;
let min =3;

let random = Math.floor(Math.random()*(max-min+1))+min;

console.log(random);