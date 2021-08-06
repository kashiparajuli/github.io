
const readline = require('readline').createInterface({
    input: process.stdin, output: process.stdout,
});



const getNumber = (sum) => {
    readline.question('Enter the number  : ', (number) => {
        if (number === 'stop') {
            readline.close();
            console.log("Sum of the numbers= " + sum);
            return 0;
        }
        sum = (parseInt(number) + parseInt(sum || 0));
        getNumber(sum);
    });
}
getNumber();
