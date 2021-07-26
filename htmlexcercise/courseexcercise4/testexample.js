
const a=[1,2,3,4,5];

const b=a.map(function(elem,i, array){
    return elem+3;
});

console.log("new Array is "+b);

function myProductFunction(p1,p2){
return p1*p2;
}
console.log("the product fo the two element is "+myProductFunction(4,5));

function oddEven(a){
    if(a%2==0) return true;
    else return false;
console.log("the number is "+oddEven(5));
}