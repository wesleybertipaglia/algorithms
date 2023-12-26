class Wish {
    constructor(userId, title, description, status) {
        this.userId = userId;
        this.title = title;
        this.description = description;
        this.status = status;
        this.dateCreated = Date.now();
    }
}
module.exports = Wish;