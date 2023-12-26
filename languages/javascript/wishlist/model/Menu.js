const ReadLine = require("./ReadLine");

class Menu {
    constructor(options, switchOption) {
        this.options = options;
        this.switchOption = switchOption;
        this.ReadLine = ReadLine;
    }

    getOption(notAvailable, repeat) {
        if (notAvailable) {
            console.log("\n\nThis option is not available, please chose another option.\n\n");
        }

        if (repeat) {
            console.log("\n");
        }

        this.ReadLine.question(`Available Options: ${this.options.map(option => `\n - ${option} [${this.options.indexOf(option)}]`).join('')}\n Chose an option: `, (option) => {
            this.switchOption(option);
        });
    }

    stopOrContinue(notAvailable) {
        if (notAvailable) {
            console.log("\n\nThis option is not available, please chose another option.\n\n");
        }

        this.ReadLine.question('Do you want to stop or continue?\n - Chose another option [1]\n - Exit [2]\n Chose an option: ', (option) => {
            switchStopOrContinue(option);
        });
    }

    switchStopOrContinue(option) {
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
}
module.exports = Menu;