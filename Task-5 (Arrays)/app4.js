/*Suppose you are attempting an assessment of a tech company.
In the assessment, they have given you a sequence [2, 3, 0, 1, 4, 6, 7, 7]. 
They want you to replace 2 with 200 in the given sequence. How would you do that?*/

let modernArray =  [2, 3, 0, 1, 4, 6, 7, 7];

console.log("Given Array: " + modernArray);

for (let i=0; i < modernArray.length; i++){
    if (modernArray[i] == 2){

        modernArray[i] = 200;
    }

}

console.log("New Array after replacing 2 by 200  : " + modernArray);



