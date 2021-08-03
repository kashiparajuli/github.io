const CAR = (function () {
    var speed;
    var direction;
  
    function getSpeed() {
        return speed;
    }
    function getDirection() {
        return direction;
    }
 
    function setSpeed(cSpeed) {
        speed = cSpeed;
    }
    function setDirection(cDirection) {
        direction = cDirection;
    }

    function gasPaddle() {
        if(speed<=115){
            speed=speed+5;
        }
    }
    function brake() {
        if(speed>=10) {
            speed=speed-10;
        }
    }
    function trunLeft(degree) {
        return direction-degree;
    }
    function trunRight() {
        return direction+degree;
    }
    function status() {
        console.log("The car is driving direction " + direction + " at " + speed + "mph")
    }
    return {
       setSpeed:setSpeed,
       setDirection:setDirection,
        trunLeft: trunLeft,
        trunRight: trunRight,
        status: status,
    }
})();
emp.setName("Kashinath Parajuli");
emp.setAge(36);
emp.setSalary(90000);
console.log(emp.increaseSalary(40));
console.log(emp.increaseAge(3));



// Write a revealing module CAR that has a private variables speed, and direction and the following public methods:

// gasPaddle() which increases the speed by 5, but never above 120
// break() which decreases the speed by 10, but never below 0
// turnLeft() which takes an amount of degrees and reduces direction
// turnRight() which takes an amount of degrees and increases direction
// status() which console.logs