"use strict";

var b = 5;
var c = hello(b);
var a = 1000;
var d = {a: 50, b: 90};
console.log(c.apply(d));
function hello(a) {
    console.log(this);
    a = a * 2;
    console.log(bye())
    function bye() {
        console.log(this);
        console.log(b);
        console.log(this.b);
        return a;
    }
    var b = 100;
    return bye;
}