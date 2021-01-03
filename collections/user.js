export default class User {
    constructor(username, plainPassword) {
        this.username = username;
        this.password = this.hashPassword(plainPassword);
    }

    hashPassword() {

    }

    persist() {

    }

    resetPassword() {

    }
}