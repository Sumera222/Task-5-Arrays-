/*Consider the array: [2, 2, 1, 0, 9, 39, 20] .
Can you find out how many times 2 occurs in this array and return the count of it?*/

let yourArray = [2, 2, 1, 0, 9, 39, 20];
let count = 0;

/* By For Loop */
console.log("Using For loop");

for (let i=0; i < yourArray.length; i++){

    if (yourArray[i] == 2){
        count++;
    }
    
}
console.log("Repetition of digit 2 is: ", count);

