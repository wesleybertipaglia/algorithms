const Menu = require("./Menu");

const swichOption = function (option) {
    switch (option) {
        case "0":
            this.signIn();
            break;

        case "1":
            this.signUp();
            break;

        case "1":
            this.logout();
            break;

        default:
            this.getOption(true);
            break;
    }
}
const Auth = new Menu(["Sign-in", "Sign-up", "Log-out"], swichOption)

Auth.signIn = async function () {
    console.log("Sign-in\n");
    let credentials = { emailUsername: "", password: "" }

    this.ReadLine.question(`E-mail or Username: `, (emailUsername) => {
        credentials.emailUsername = emailUsername;

        this.ReadLine.question(`Password: `, (password) => {
            credentials.password = password;
            this.verifyCredentials(credentials);
        });
    });
}

Auth.signUp = function () {
    console.log("Sign-up");
}

Auth.logout = function () {
    console.log("Log-out");
}

Auth.verifyCredentials = function (credentials) {
    if (credentials != null) {
        console.log(`You are in, ${credentials.emailUsername}`)
    }
}

module.exports = Auth;