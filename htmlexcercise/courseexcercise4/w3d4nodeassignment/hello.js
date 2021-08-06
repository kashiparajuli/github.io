    const readline = require('readline').createInterface({
        input: process.stdin, output: process.stdout,
    });
    readline.question('What is your name? ',
        name => {
            console.log(`Welcome ${name}`);

            readline.question('What is your age? ',
                age => {
                    console.log(`Welcome ${age}`);
                    if (age < 16) {
                        console.log("you are not allowed to drive in IOWA")
                    }
                    else {
                        console.log("you are allowed to get driver license in IOWA")
                    }
                    readline.close();
                });
        });
