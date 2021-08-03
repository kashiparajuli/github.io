class Animal{
    constructor(name){
        this.name=name;
        this.speed=0;
    }
    run(speed){
        this.speed=speed;
        console.log('${this.name} runs in speed ${this.speed}');
    }
    stop(){
        console.log(this.name+'still stands up');
    }
}

let user=new Animal("Monkey");
user.run(5);
user.stop();
