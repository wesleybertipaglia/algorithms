class Menu {
    constructor(options) {
        this.options = options;
        this.readLine = require("./ReadLine");
    }

    getOption(notAvailable, repeat, callback) {
        if (notAvailable) {
            console.log("\n\nThis option is not available, please choose another option.\n\n");
        }

        if (repeat) {
            console.log("\n");
        }

        this.readLine.question(`Available Options: ${this.options.map(option => `\n - ${option} [${this.options.indexOf(option)}]`).join('')}\n Choose an option: `, (option) => {
            callback(option);
        });
    }

    stopOrContinue(notAvailable) {
        if (notAvailable) {
            console.log("\n\nThis option is not available, please choose another option.\n\n");
        }

        this.readLine.question('Do you want to stop or continue?\n - Choose another option [1]\n - Exit [2]\n Choose an option: ', (option) => {
            this.switchStopOrContinue(option);
        });
    }

    switchStopOrContinue(option) {
        switch (option) {
            case "1":
                this.getOption(false, true);
                break;

            case "2":
                process.exit(0);

            default:
                this.stopOrContinue(true);
                break;
        }
    }
}

module.exports = Menu;
