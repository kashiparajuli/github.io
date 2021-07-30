// function greeting() {
//     let message = 'Hi';

//     function sayHi() {
//         console.log(message);
//     }

//   sayHi();
// }
// let hi = greeting();
// console.log(hi()); // still can access the message variable


// function greeting(message){
//     return function(name){
//         return message+' '+name;
//     }

// }

// let sayHi=greeting('Hi');
// let sayHello=greeting('Hello');

// console.log(sayHi('john'));
// console.log(sayHello('Doe'));


// var x=10;
// function myFunction(){
// return x*x;
// var x=5;
// }
// console.log(myFunction());

// var x = 5;
// var y = 7;
// function a() {
//     function b() {
//         console.log(`1: x=${x} y=${y}`);
//         y = 10;
//         return function c(y) {
//             console.log(`2: x=${x} y=${y}`);
//         }
//     }
//     console.log(`3: x=${x} y=${y}`)
//     var z = b()
//     var x = 10;
//     z(20);
// }
// console.log(`4: x=${x} y=${y}`);
// a();
// console.log(`5: x=${x} y=${y}`);


// const pt = {
//     x: 4,
//     y: 3,
//     distanceFromOrigin: function() {
//     // return Math.sqrt(this.x * this.x + this.y * this.y); }
//     return Math.sqrt(this.x*this.x+this.y*this.y);}
//     };
// console.log(pt.distanceFromOrigin()); // 5


// const person={name:"kashi",age:50};

// console.log(person.name+' '+person.age);

//const myTitle=document.getElementById("myTitle");

// const myTitle=document.getElementById("myTitle");
// function play(){
//     console.log(this);
// }

// myTitle.addEventListener("cick",function(){
//     console.log(this);
// });

// var me = {
//     first: 'Tina',
//     last: 'Xing', getFullName: function() {
//     return this.first + ' ' + this.last; }
//     };
//     var you = { first: 'Rujuan', last: 'Xing'
//     };
//     console.log(me.getFullName.call(you));

//bind call apply
// var obj = {
//     x: 81,
//     getX: function() {
//       return this.x;
//     }
//   };
  
//  console.log(obj.getX.bind(obj)());
//  console.log(obj.getX.call(obj));
//  console.log(obj.getX.apply(obj));

// const person = {
//     name: "Lokamn",
//     dob: 12,
//     print: function (value,value2) {
//         console.log(this.dob+value+value2)
//     }
// }
// const anotherPerson= {
//      name: "Pappu",
//      dob: 12,
// }
//  person.print.call(anotherPerson,1,2)

// const person={
// name: "Lokamn",
// dob: 12,
// print: function (value,value2) {
//     console.log(this.dob+value+value2)
// }
// }
// const anotherPerson= {
//  name: "Pappu",
//  dob: 12,
// }
// person.print.apply(anotherPerson,[1,2])

// const person={
// name: "Lokamn",
// dob: 12,
// anotherPerson: {
//     name: "Pappu",
//     dob: 12,
//     print2: function () {
//         console.log(this)
//     }
// }
// }

// var bindFunction = person.anotherPerson.print2.bind(person)
// bindFunction()

// var a=2;
// (function (){
//     var a=3;
//     console.log(a);
// })();
// // console.log(a);
// (function(){
// var count=0;
// function incr(n){
//     count+=n;
// }
// function reset(){
//     count=0;
// }
// incr(4);
// //incr(2);
// console.log("count: "+count); 
// }
// )();
//apply call bind

const person ={
    firstName:"kashi",
    lastName:"parajuli",
    getFullName:function(){
        return this.firstName+" "+this.lastName;
    }
};

var measure =function(a,b){
    return this.getFullName()+" "+a+" "+b;
}
console.log(measure.call(person,20,30));
console.log(measure.apply(person,[20,30]));

var m=measure.bind(person);

console.log(m(30,40));


//curring with bind.

function multiply(a,b){
    return a*b;
}

const multiplyByTwo=multiply.bind(null,2);
console.log(multiplyByTwo(8));

const multiplyByThree= multiply.bind(null,3);
console.log(multiplyByThree(10));

//Function(method) Borrowing with apply

var me={
    first:"kashi",
    last:"sharma",
    getFullname:function(){
        return this.first+" "+this.last;
    }
};

var you={
    first:"Hari",
    last:"Thapa"
}

console.log(me.getFullname.apply(you));


