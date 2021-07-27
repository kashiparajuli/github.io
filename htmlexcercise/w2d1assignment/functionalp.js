


/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

/* 4 Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers*/


function sum(arr) {
    return arr.reduce((num1, num2) => num1 + num2);
}

function mutliply(arr) {
    return arr.reduce((num1, num2) => num1 * num2);
}
function reverse(str1) {
    return str1.split("").reduce((char1, char2) => {
       return char2 + char1;
    });
}


/*Write a function filterLongWords() that takes an array of words and an integer i and 
returns the array of words that are longer than i.*/
function filterLongWords(arr, i) {
    return arr.filter((word) => word.length > i);
}

/*Modify the jsfiddle on the map/filter/reduce slide ( https://jsfiddle.net/keithlevi/e6kqvx2f/9/ ) as follows:*/

console.log("expected output of the array sum([1,2,3,4]) is 10 " + myFunctionTest(10, sum([1, 2, 3, 4])));
console.log("expected output of the array multiply([1,2,3,4]) is 24 " + myFunctionTest(24, mutliply([1, 2, 3, 4])));

console.log("expected output of the reverse(str1) is  ihsak  " + myFunctionTest("ihsak", reverse("kashi")));

console.log("expected output of the array filterLongWords are kashinath ,swarnim " + myFunctionTest('kashinath,swarnim',

    filterLongWords(['kashinath', 'ram', 'swarnim', 'dal'], 3)));