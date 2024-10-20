"use strict";
export class User {
    constructor(username, password, email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }
} 

let person = prompt("Please enter your name");
let password = prompt("Please enter your password");
let email = prompt("Please enter your email");

let user = new User(person, password, email);

console.log("Name: ",user.username);
console.log("Password: ",parseInt(user.password));
console.log("Email: ", user.email);