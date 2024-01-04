class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.dateCreated = Date.now();
    }
}
module.exports = User;