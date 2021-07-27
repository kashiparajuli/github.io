


/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
  if (expected === found) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED.  Expected " + expected + " found " + found;
  }
}

/* max returns the maximum of 2 arguments */
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  };
}
console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));

/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
  return max(max(a, b), c);

}



/*Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.*/

function isVowel(c){
  if(c==='a'|| c==='e'||c==='i'||c==='o'||c==='u'){
      return true;
  }
  else 
  return false;

}

/*Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers 
in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.*/
function sum(arr){
    let sum=0;
    if(arr.length>0){
    for(let i=0; i<arr.length; i++){
    sum+=arr[i];
    }
  }
  return sum;
}
function mutliply(arr){
    let mul=1;
    if(arr.length>0){
    for(let i=0; i<arr.length; i++){
        mul*=arr[i];
    }
  }
  return mul;
}
/*Define a function reverse() that computes the reversal of a string. For example, 
reverse("jag testar") should return the string "ratset gaj".*/

function reverse(str1){
  /*return str1.split("").reverse().join(""); */
  let newString=""
  for(let i=str1.length-1; i>=0; i--){
    newString+=str1[i];
  }
  return newString;
}


/*Write a function findLongestWord() that takes an array of words and returns the length of the longest one.*/

function longestWord(arr1){
  let longlength=0;
  for(let i=0; i<arr1.length; i++){
  if(arr1[i].length>longlength){
    longlength=arr1[i].length;
  }
  } 
  return longlength;

} 
/*Write a function filterLongWords() that takes an array of words and an integer i and 
returns the array of words that are longer than i.*/
function filterLongWords(arr,i){
let newArr=[];
for(let j=0; j<arr.length; j++){
  if(arr[j].length>i){
    newArr.push(arr[j]);
  }
}
return newArr.toString();
}

/*Modify the jsfiddle on the map/filter/reduce slide ( https://jsfiddle.net/keithlevi/e6kqvx2f/9/ ) as follows:*/

/* a) multiply each element by 10; */
function multiplyby10(arr){
return arr.map(function(elem){
return elem*10;
});
}
/*b) return array with all elements equal to 3; */
function arrayHavingThree(arr){
  return arr.filter(function(elem){
    return elem==3;
  })

}
/*c) return the product of all elements; */
function arrayMultiply(arr){
  return arr.reduce(function(prevValue, elem){
    return prevValue*elem;
  });

}



console.log("expected output of the array total multiply is 135 "+myFunctionTest(135,
arrayMultiply([1,3,5,3,3])));

console.log("expected output of the array multiply is 10,30,50,30,30 "+myFunctionTest([10,30,50,30,30],
  multiplyby10([1,3,5,3,3])));

console.log("expected output of the array having 3 element is 3,3,3 "+myFunctionTest([3,3,3],
  arrayHavingThree([1,3,5,3,3])));

console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));

console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, maxOfThree(55, 4, 44)));

console.log("expected output of isVowel('d') is false "+myFunctionTest(false,isVowel('d')));
console.log("expected output of the array sum([1,2,3,4]) is 10 "+myFunctionTest(10,sum([1,2,3,4])));
console.log("expected output of the array multiply([1,2,3,4]) is 24 "+myFunctionTest(24,mutliply([1,2,3,4])));

console.log("expected output of the reverse(str1) is  ihsak  "+myFunctionTest("ihsak",reverse("kashi")));

console.log("expected output of the array longestWord(arr) is 9 "+myFunctionTest(9,
longestWord(['kashinath','ram','swarnim','narayan'])));

console.log("expected output of the array filterLongWords are kashinath ,swarnim "+myFunctionTest('kashinath,swarnim',

filterLongWords(['kashinath','ram','swarnim','dal'],3)));