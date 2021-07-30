// function Shape(x,y){
//     this.x=x;
//     this.y=y;
// }

// Shape.prototype.distFromOrigin=function(){
//     return Math.sqrt(this.x*this.x+this.y*this.y);
// };


// function Square(x,y,width,height){
//     this.x=x;
//     this.y=y;
//     this.widht=width;
//     this.height=height;
// }

// Square.prototype.__proto__=Shape.prototype;

// Square.prototype.area=function()    {
//     return this.width*this.height;
// };
// console.log(Shape.prototype.distFromOrigin(4,5));

/*############*/
// let object={
//     name:"kashi",
//     city:"Farifield",
//     getInfo:function(){
//         console.log(this.name+" from "+this.city)
//     }
// };
// let object2={
//     name:"Ram"
// };
// object2.__proto__=object;

// console.log(object2.getInfo());

// var Person=function(){};

// Person.prototype.initialize=function(name,age){
//     this.name=name;
//     this.age=age;
// }

// Person.prototype.describe=function() {
//     return this.name+"," +this.age+"Years old";

// }
// var Student=funcion()
// {};

// Student.prototype=new Person();

// Student.prototype.learn=funcion(subject)
// {
//     console.log(this.name+" Just Learned Subject "+subject)
// }
// var me=new Student();
// me.initialize("John",25);
// me.learn("JS Inheritance");

var Person = function() {};
Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}
Person.prototype.describe = function()
{
    return this.name + ", " + this.age + " years old.";
}
var Student = function() {};
Student.prototype = new Person();
Student.prototype.learn = function(subject)
{
    console.log(this.name + " just learned " + subject);
}
var me = new Student();
me.initialize("John", 25);
me.learn("Inheritance");