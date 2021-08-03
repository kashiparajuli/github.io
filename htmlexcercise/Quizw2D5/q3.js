

// Implement the following class-diagram in JavaScript with constructor functions and prototypal inheritance.

// The runProgram() method should take a string that indicates which program, and then console.log "running: " + program

// The carryAround() method takes no parameters, and console.log "carrying laptop:  cpu" + cpu +" ram: " + ram + " storage: " + storage + " battery: " + battery


const Computer = function(){
    this.ram = 16;
    this.cpu = "M1chip";
    this.storage = 512;
    this.runProgram = function(program){
        console.log("running " + program);
    }
} 

const Laptop = function(){
    this.battery = 1200;
    this.carryAround = function(){
        console.log("carrying laptop:  cpu " + this.cpu +" ram: " + this.ram + " storage: " + this.storage + " battery: " + this.battery);
    }
}



Laptop = function() {};
Laptop.prototype.initialize = function(battery) {
 this.ram = ram;
 this.storage = cpu;
};
Computer.prototype.runProgram = function() {
 return `this.name, ${this.age} years old.`;
};

Teacher = function() {};
Teacher.prototype = new Person();
Teacher.prototype.teach = function(subject) {
    return `${this.name} is now teaching ${subject}`;
}

let teacher = new Teacher();
teacher.initialize("Kashi", 35);
console.log(teacher.teach("WAP"));

String.prototype.filter = filter;
Array.prototype.bubbleSort = bubbleSort;


const Computer = function(){
    this.ram = 8;
    this.cpu = "Intel";
    this.storage = 223;
    this.runProgram = function(program){
        console.log("Running " + program);
    }
} 

const Laptop = function(){
    this.battery = 700;
    this.carryAround = function(){
        console.log("carrying laptop:  cpu " + this.cpu +" ram: " + this.ram + " storage: " + this.storage + " battery: " + this.battery);
    }
}
