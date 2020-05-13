/**
 * 
 * Array
 * 
 * list of objects
 * 
 * 
 * 
 */

 let gList = ['bread','milk','tomato'];

 // how to check array

 console.log(Array.isArray(gList));

 // if this returns true its array

 console.log(gList.constructor === Array);

 // each element have index associated with and starts with zero

 console.log(gList.length);

 console.log(gList[1]);

 console.log(gList.indexOf('milk'));

 // this will display the index

 // if the given name is not available it will display -1

 // it will display first index, if there are repeated

 console.log(gList.indexOf('milk',2));
 //this will fetch the second milk


 // we cannot modify the arrays

 // we can only replace them

 /// primitive data types are immutable

 // arrays and objects are mutable

 // use const for the arrays

 // const cannot replace this values, still we can modify it

 