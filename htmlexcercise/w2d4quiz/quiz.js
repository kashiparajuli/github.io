

// var x = 5;
// var y = test();
// var b = { x: 4 };
// var z = y.bind(b);
// z();
// function test() {
//     console.log(this);
//     console.log(x);
//     var z = function() {
//         var x = 3;
//         console.log(this);
//         console.log(this.x);
//     }
//     var x = 8;
//     z();
//     return z;
// }

   

var Val = (
    function() {
        var firstName, lastName;
        var flag = true;
       function validateFirstName(){
           if(getFirstName() === ""){
               flag = false;
           }
           return flag;
       };
       function validateLastName(){
           if(getLastName() === ""){
               flag = false;
           }
           return flag;
       }
       function getFirstName() {
           return firstName;
       }
       function getLastName() {
           return lastName;
       }

       function setFirstName(fName) {
           firstName = fName;
       }
       function setLastName(lName) {
           lastName = lName;
       }
       function validate(fName, lName){
           setFirstName(fName);
           setLastName(lName);
           return validateFirstName() && validateLastName();
       }
       return {
           validateMethod: validate
       }
    }
)();
console.log( validate.validateMethod("Hari","SHarma"));
 


