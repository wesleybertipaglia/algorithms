const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function helloWorld() {
    console.log("\n>> Hello World!\n");
    stopOrContinue();
}

function sayHello() {
    rl.question("What's your name? ", (name) => {
        console.log("\n>> Hello, ", name, "\n");
        stopOrContinue();
    });
}

function takeOption(notAvailable, repeat) {
    if (notAvailable) {
        console.log("\n\nThis option is not available, please chose another option.\n\n");
    }

    if (repeat) {
        console.log("\n");
    }

    rl.question('Avalible Options:\n - Hello World [1]\n - Say Hello [2]\n Chose an option: ', (option) => {
        swichOption(option);
    });
}

function stopOrContinue(notAvailable) {
    if (notAvailable) {
        console.log("\n\nThis option is not available, please chose another option.\n\n");
    }

    rl.question('Do you want to stop or continue?\n - Chose another option [1]\n - Exit [2]\n Chose an option: ', (option) => {
        switchStopOrContinue(option);
    });
}

function swichOption(option) {
    switch (option) {
        case "1":
            helloWorld();
            break;

        case "2":
            sayHello();
            break;

        default:
            takeOption(true);
            break;
    }
}

function switchStopOrContinue(option) {
    switch (option) {
        case "1":
            takeOption(false, true);
            break;

        case "2":
            process.exit(0);
            break;

        default:
            stopOrContinue(true);
            break;
    }
}

function main() {
    takeOption();
}

main();