/*You need to place 7 at the 3rd index of the array: [3, 8, 10, 12, 45, 34, 34, 34, 2, 2, 0] . 
How’d you do that?*/

let Array1 = [3, 8, 10, 12, 45, 34, 34, 34, 2, 2, 0];

console.log("Given array: " + Array1);

Array1.splice(3, 0, 7);

console.log("Place 7 at the 3rd index of the array: " + Array1);