/**
 * 
 * Scope Chain
 * 
 * 
 * 
 * 
 */

 if(true){
     let fromIf =1;
 // here this values is 1
 {
     console.log(fromIf); // this will produce not defined error - dead zone
     let fromIf =23; // here this values is 23
 }
 
    }
