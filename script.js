

// 1. Write a function min that takes two numbers and returns the smallest one of the pair.
// Examples:
// console.log(min(0, 10)); // will output 0.
// console.log(min(0, -10)); // will output -10

function min(inputOne, inputTwo) {

if (inputOne < inputOne) {

    return inputOne; 

} else {

    return inputTwo;

};

};


// 2. Write a function that takes the radius of a circle and outputs it’s approximate circumference (the formula for circumference is 2 *pi * radius, you may use 3.14 for pi).
// Example Output:
// console.log(calculateCircumference(5)); // will output 31.4

function calculateCircumference(radius) {

    return 2 * 3.14 * radius;

};


// 3. Write a function searchString that takes a character and then returns how many times it appears in another string argument.
// Example Output:
// console.log(searchString(“s”, “mississippi”)); // will output 4
// console.log(searchString(“q”, “mississippi”)); // will output 0

function searchString(searchValue, input) {

    //setting the count to 0 as a let to be able to add to it for the final console log.

    let searchCount = 0;

    for(

        //setting the search var to go through the string adding a value to continue till the end of the string.

        let i = 0;
        
        i < input.length;

        i++

    ) { //every letter in the string is getting checked for equality to the search value and adding to the count if its equal.

        if (input[i] === searchValue) {

            searchCount++;

        }

    } //after the whole string has been check the total amount of equals will have been counted and will return to the console log.

    return searchCount;

};
