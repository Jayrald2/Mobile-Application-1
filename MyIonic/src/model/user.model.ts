export class User {
    username: string;
    password: string;
    email: string;  

    constructor(username: string, password: string, email: string) {
        this.username = username;
        this.password = password;
        this.email = email;
    }
}

let person = "";
let password = "";
let email = "";

let user = new User(person, password, email);

console.log("Name: ",user.username);
console.log("Password: ",parseInt(user.password));
console.log("Email: ", user.email);