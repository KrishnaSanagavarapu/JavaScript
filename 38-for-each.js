/**
 *
 * Iterate through Arrays
 *
 *
 */

let gList = ["dks", "sdsf", "sdfs"];

let len = gList.length;

for (i = 0; i <= len - 1; i++) {

    console.log(`${i}-${gList[i]}`);
}

gList.forEach((item,index) =>
{
    console.log(`${index}-${item}`);
}
)

// for of loop

for(let [index,item] of gList.entries()){
    console.log(`${index}-${item}`);
}

 // .values

 // .keys

