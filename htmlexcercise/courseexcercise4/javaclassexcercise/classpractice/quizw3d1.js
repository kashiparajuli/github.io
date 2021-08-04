class Computer{
    constructor(ram,cpu,storage){
        this._ram=ram;
        this._cpu=cpu;
        this._storage=storage;
    }
    runProgram(program){
        console.log("running"+program);
    }
    }

class Laptop extends Computer{
    constructor(ram,cpu,storage,battery){
        super(ram,cpu,storage)
        this._battery=battery;
    }
    carryArround(){
        console.log("ram "+this._ram+"cpu "+this._cpu +"storage "+this._storage+"battery "+this._battery);
    
    }
}

let objLaptop=new Laptop("2GB","3GHz",450,"250V");
console.log(objLaptop.carryArround());
console.log(objLaptop.runProgram("java"));
