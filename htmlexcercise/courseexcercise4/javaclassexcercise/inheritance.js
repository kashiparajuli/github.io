class Animal {
    constructor(name) {
        this.name = name;
        this.speed = 0;
    }
    run() {
        //this.speed = speed;
        console.log("Animal runs");
    }
}
class Rabbit extends Animal{
    constructor(name,earLength){
        super(name);
        this.name=name;
        this.earLength=earLength;
    }
}
let rabbit =new Rabbit("small Rabit",10);

console.log(rabbit.name);
console.log(rabbit.earLength);
rabbit.run();
