/*
How to convert one data type to other type


*/



let num = 20.20;

let numeString = num.toString();

console.log(numeString);
console.log(num.__proto__);
// this also does auto boxing
// this number has number object
// then it will have access to all the methods

/// we can convert booolean to string

// we cannot convert to Symbol

// anything to string

let str = 'hi';
console.log(+str);
// NaN is displayed

// we cannot convert string to number

// we can convert number string to number

// any non-zero number conversion to boolean gives true

