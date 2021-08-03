/*class Car{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }

    age(){
        let date=new Date();
        return date.getFullYear()-this.year;
          
    }
}
    let car= new Car("ford","2016")
console.log("my car is "+car.age()+ "years old");
*/
//Getters and Setters
/*class User{
    constructor(name){
        this.name=name;
    }
    get name(){
        return this._name;

    }
  set name(value) {
      if(value.length<4){
          console.log("name is to short");
          return;   
      }
      this._name=value;
      }
    }
   let user=new User("kashi");
 
console.log(user.name);
user.name="sharma"
user2=new User("");
*/
//class property versus method

class User{
    constructor(name="Anonymous"){
        this.name=name;
    }
    sayHi(){
        console.log('Hello,${this.name}!');
    }
}
fred=new User();
console.log(fred);
console.log(fred._proto_);
console.log(User.prototype);
fred.sayHi();

bob=new User("Bob");
console.log(bob);
bob.sayHi();
