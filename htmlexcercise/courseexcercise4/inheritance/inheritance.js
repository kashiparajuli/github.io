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

// var Person = function() {};
// Person.prototype.initialize = function(name, age)
// {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.describe = function()
// {
//     return this.name + ", " + this.age + " years old.";
// }
// var Student = function() {};
// Student.prototype = new Person();
// Student.prototype.learn = function(subject)
// {
//     console.log(this.name + " just learned " + subject);
// }
// var me = new Student();
// me.initialize("John", 25);
// me.learn("Inheritance");

// let animal = {
//     eats: true,
//     walk() {
//       /* this method won't be used by rabbit */
//     }
//   };
  
//   let rabbit = {
//     __proto__: animal
//   };
  
//   rabbit.walk = function() {
//     console.log("Rabbit! Bounce-bounce!");
//   };
  
//   rabbit.walk(); // Rabbit! Bounce-bounce!

//######example 1######
  // let user = {
  //   name: "John",
  //   surname: "Smith",
  
  //   set fullName(value) {
  //     [this.name, this.surname] = value.split(" ");
  //   },
  
  //   get fullName() {
  //     return `${this.name} ${this.surname}`;
  //   }
  // };
  
  // let admin = {
  //   __proto__: user,
  //   isAdmin: true
  // };
  
  // console.log(admin.fullName); // John Smith (*)
  
  // // setter triggers!
  // admin.fullName = "Alice Cooper"; // (**)
  
  // console.log(admin.fullName); // Alice Cooper, state of admin modified
  // console.log(user.fullName); // John Smith, state of user protected
//########ex attribute and method access
  // let Animal={
  //   eats:true,
  //   walk:function(){
  //     console.log("Animal walks");

  //   }
  // };
  // let Rabbit={
  //     jumps:true,
  //     __proto__:Animal
  // };

  // Rabbit.__proto__=Animal;
  // console.log(Rabbit.eats);
  // Rabbit.walk();

  //for in access keys from both object and super object

  /*let Animal={
    eats:true
  };

  let Rabbit={
    jumps:true,
    __proto__:Animal
  }

  console.log(Object.keys(Rabbit));

  for(let prop in Rabbit) 
    console.log(prop); */

    // use has property

    /*let Animal={
      eats:true
    };
    let Rabbit={
      jumps:true,
      __proto__:Animal
    }

    for(let prop in Rabbit){
      let isOWn=Rabbit.hasOwnProperty(prop);
        if(isOWn){
          console .log('Own: ${prop}');
      }
      else {
        console.log('inherited:${prop}');
      }
    }*/
    //Constructor function example
  
    /*let Animal={
      eats:true
    }
    
    function Rabbit(name){
      this.name=name;
    }

    Rabbit.prototype=Animal;

    let user= new Rabbit("Black Rabbit");
    console.log(user.eats); 
    console.log(user.name);*/
    //creats objects via constructor function
/*
 function Person(){
      //console.log(this)
      this.university="MUm";
      this.year="2016"
    }
    const faculty1=new Person();

    Person.prototype.greet=function(){
      return 'Hi'+' '+this.university;
    }
     //const greeting=faculty1.greet();
  console.log(faculty1.greet()); */

  //Example course object creation via construction function 

function Course(courseName){
  this.courseName=courseName;
  console.log("constructor function invoked");
}
Course.prototype.register=function() {
  return 'Register'+' '+this.courseName;
}
const wap= new Course("WAP");
console.log(wap);
console.log(wap.__proto__);
console.log(wap instanceof Course);
console.log(Course.prototype.register)
console.log(wap.register());
