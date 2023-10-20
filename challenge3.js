/*
Challenge 3
Create a function called map that takes two inputs:
an array of numbers (a list of numbers)
a 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.
map([1,2,3,4,5], multiplyByTwo); //-> [2,4,6,8,10]
multiplyByTwo(1); //-> 2
multiplyByTwo(2); //-> 4
  
Challenge 
 */

// Challenge 3
function map(array, callback) {

    const newArr = []; // declare a new array to store the new values in 
    for (let i = 0; i < array.length; i++){ // loop, to loop through the array
      newArr.push(callback(array[i])); // push the new elements to the newArr after the callback function is applied
    }
    return newArr; // returns the new array [3, 4, 5ca]
  }
  
  console.log(map([1, 2, 3], addTwo));
