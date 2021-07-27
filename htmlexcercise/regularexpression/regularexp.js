
// let reg=/kashi/g  //g means globally search in page.
// let reg1=/kashi/i //cas insensitive

// console.log(reg);
// console.log(reg.source);

// let s="The person who is studing in MIU is kashi. the age of kashi";

// let result= reg.exec(s);

// console.log(result);

// let result1= reg.exec(s);

// console.log(result1.input);


    var reg="My Name is Kashinath Parajuli 1 2!"
    // var part1=/[1 2]/g;

    var part1=/\W/g;
    var result=reg.match(part1);
    var part2=/name/g;
    var result1=part2.global;
    console.log(result1);

    var part3=/name/i;
    var result2=part3.ignoreCase;
    console.log(result2);
    console.log("matched item is"+result);


var part3=new RegExp("e");
var result3=part3.exec(reg);

console.log("matched item is "+result3); 




