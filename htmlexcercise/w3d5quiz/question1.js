class Duck {
    constructor(flying = false, quaking = false, xPos = 0, yPos = 0) {
        this.flying = flying;
        this.quaking = quaking;
        this.xPos = xPos;
        this.yPos = yPos;
    }
    takeOff() {
        this.flying = true;
    }
    land() {
        this.flying = false;
    }
    startQuacking() {
        this.quaking = true;
    }
    stopQuacking() {
        this.quaking = true;
    }
    moveTo(x, y) {
        this.xPos = x;
        this.yPos = y;
        console.log(`Duck is swimming to ${x},${y}`);
        console.log(`Duck is swimming to ${x},${y} while quacking`);
        console.log(`Duck is flying to ${x},${y}`);
        console.log(`Duck is flying to ${x},${y} while quacking`);

    }
}
module.exports = Duck;