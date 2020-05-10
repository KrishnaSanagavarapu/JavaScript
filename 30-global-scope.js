/**
 * Global Scope
 *
 * It is accessed in the entire scope
 *
 * Multiple ways to define the global scope
 *
 * outer area of the js code
 *
 *
 * console.log(window);
 * 
 * this is globally available
 * 
 */

let outer = 1;

if (true) {
  console.log("this is scope");
} else if ((outer > -1)) {
  console.log("this is inside");
} else {
  console.log("this is local");
}
