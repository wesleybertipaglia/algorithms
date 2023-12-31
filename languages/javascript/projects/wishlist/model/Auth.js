const Menu = require("./Menu");
const fs = require("fs");
const User = require("./User");

const usersFilePath = "./data/users.json";
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

class Auth {
    constructor() {
        this.menu = new Menu(["Sign-in", "Sign-up", "Log-out"]);
        this.readLine = require("./ReadLine");
        this.session = { user: "" };
    }

    getOption(notAvailable, repeat) {
        this.menu.getOption(notAvailable, repeat, (option) => {
            this.switchOption(option);
        });
    }

    switchOption(option) {
        switch (option) {
            case "0":
                this.signIn();
                break;

            case "1":
                this.signUp();
                break;

            case "2":
                this.logout();
                break;

            default:
                this.menu.getOption(true);
                break;
        }
    };

    signIn() {
        console.log("Sign-in\n");
        let credentials = { emailUsername: "", password: "" };

        this.readLine.question(`E-mail or Username: `, (emailUsername) => {
            credentials.emailUsername = emailUsername;

            this.readLine.question(`Password: `, (password) => {
                credentials.password = password;
                this.verifyCredentials(credentials);
            });
            this.readLine.close();
        });
    }

    signUp() {
        console.log("Sign-up");
        let credentials = { username: "", email: "", password: "" };

        this.readLine.question(`E-mail: `, (email) => {
            credentials.email = email;

            this.readLine.question(`Username: `, (username) => {
                credentials.username = username;

                this.readLine.question(`Password: `, (password) => {
                    credentials.password = password;

                    const newUser = new User(credentials.username, credentials.email, credentials.password);
                    const existingUsers = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
                    existingUsers.push(newUser);
                    fs.writeFileSync(usersFilePath, JSON.stringify(existingUsers, null, 2), "utf-8");

                    this.session.user = credentials.username;
                    console.log(`User ${credentials.username} created successfully.`);
                    return this.session;
                });
            });
        });
    }

    logout() {
        console.log("Log-out");
        this.session = { user: "" };
    }

    verifyCredentials(credentials) {
        if (credentials != null) {
            const user = users.find(
                (u) => u.email === credentials.emailUsername || u.username === credentials.emailUsername
            );

            if (user && user.password === credentials.password) {
                this.session.user = credentials.emailUsername;
                console.log(`You are in, ${credentials.emailUsername}`);
                return this.session;
            } else {
                console.log("Invalid credentials. Please try again.");
                return false;
            }
        }
    }
}

module.exports = Auth;
