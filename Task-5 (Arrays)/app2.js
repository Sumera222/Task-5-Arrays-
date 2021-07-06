/*
Suppose you are given an array: [9, 7, 75, 32, 3234, 5, 3] . 
Find whether 3 is present in the given array. If it’s there return true otherwise return false.*/

let newArray = [9, 7, 75, 32, 3234, 5, 3];
console.log("Using For loop");

for (let i=0; i <newArray.length; i++){

    if (newArray[i] == 3){
        console.log("true");
       
    }
    else {
        console.log("false");
        
    }
}

