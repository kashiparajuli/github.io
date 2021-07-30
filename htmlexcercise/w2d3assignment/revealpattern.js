
//1

// var add=(function(){
//     var counter=0; 
//     return function(){
//         return counter+=1;
//     }
// })();



1
const count=(function(){
    var counter=0;
    const add=function(){
        counter+=1;
        return counter;
    }
    const reset=function(){
        counter=0;
    }
    return {
        addCounter:add,
        resetCounter:reset
    }
})();

console.log(count.addCounter());
console.log(count.addCounter());

3
const count=(function(){
    var counter=0;
    const add=function(inc){
        counter+=inc;
        return counter;
    }
    const make_adder = function(inc){
            return add(inc);
    }

    const reset=function(){
        counter=0;
    }
    return {
        addCounter:add,
        resetCounter:reset,
        makeAdder:make_adder

    }
})();

console.log(count.makeAdder(7));
console.log(count.makeAdder(7));
console.log(count.makeAdder(7));


  
//5

const emp = (function () {
    let name;
    let age;
    let salary;
    function getName() {
        return name;
    }
    function getAge() {
        return age;
    }
    function getSalary() {
        return salary;
    }
    function setName(eName) {
        name = eName;
    }
    function setAge(eAge) {
        age = eAge;
    }
    function setSalary(eSalary) {
        salary = eSalary;
    }
    function increaseSalary(percentage) {
        return getSalary() * (1 + percentage / 100);
    }
    function increaseAge(increment) {
        return getAge() + increment;
    }
    return {
        setName: setName,
        setAge: setAge,
        setSalary: setSalary,
        increaseSalary: increaseSalary,
        increaseAge: increaseAge,
    }
})();
emp.setName("Kashinath Parajuli");
emp.setAge(36);
emp.setSalary(90000);
console.log(emp.increaseSalary(40));
console.log(emp.increaseAge(3));


emp.extension = (function () {
    var address;
    function getAddress() {
        return address;
    }
    function setAddress(eAddress) {
        address = eAddress;
    }
    return {
        setAddress: setAddress,
        getAddress: getAddress
    }
}).apply(emp);