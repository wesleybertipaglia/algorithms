class User {
    constructor(name, username, email, password) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.dateCreated = Date.now();
    }
}
module.exports = User;