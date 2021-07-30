   
   var x=9;
   function myFunction(){
       return x*x;
   }

console.log(myFunction(0));

var x=5;

console.log(myFunction());


var foo=1;
function bar(){
    if(!foo){
        var foo=100;
    }
    alert(foo);
}
bar();


var addTo=function(a){
    var add=function(b){
        return a+b;
    }
    return add;
}
var  addThree=addTo(3);
var addFour=addTo(4);

console.log(addThree(2));
console.log(addFour(3));

function outerFunction(outerVariable){
    return function innerFunction(innervariable){
        console.log("outer Variable is "+outerVariable);
        console.log("inner variable is "+innervariable);
    }
}

var newFunction=outerFunction("outside");
newFunction("inner");

function response(){
    var res="Samina";

    function message(){
        console.log("hello how are you"+res);
    }
    cosole.log(message());
}


function greetCustomer() {
    var customerName = "anchal";
    function greetingMsg() {
	  console.log("Hi! " + customerName); // Hi! anchal
    }
   greetingMsg();
}

// function countTheNumber() {
//     var arrToStore = [];
//     for (var x = 0; x < 9; x++) {
//       arrToStore[x] = function () {
//         return x;
//       };
//     }
//     return arrToStore;
//   }
  
//   const callInnerFunctions = countTheNumber();
//   console.log(callInnerFunctions[0]()); // 9
//   console.log(callInnerFunctions[1]()); // 9

  function callTheNumber() {
    function getAllNumbers(number) {
      return function() {
        return number;
      };
    }
    var arrToStore = [];
    for (var x = 0; x < 9; x++) {
      arrToStore[x] = getAllNumbers(x);
    }
    return arrToStore;
  }
  
  const callInnerFunctions = callTheNumber();
  console.log(callInnerFunctions[0]()); // 0
  console.log(callInnerFunctions[1]()); // 1