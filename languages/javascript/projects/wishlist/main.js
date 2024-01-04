const Auth = require("./model/Auth");
const auth = new Auth();

function main() {
    auth.getOption();

    if (auth.session.user.length > 0) {
        console.log("You are in");
    } else {
        console.log("Try again");
    }
}

main();