class User {
    constructor(firstName,lastName,password,email){
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.email = email;
}
getUserFirstName(){
    return this.firstName;
}
getUserLastName(){
    return this.lastName;
}
getUserPassword(){
    return this.password;
}
getUserEmail(){
    return this.email;
}
setUserFirstName(firstName){
    this.firstName = firstName;
}
setUserLastName(lastName){
    this.lastName = lastName;
}
setUserPassword(password){
    this.password = password;
}
setUserEmail(email){
    this.email = email;
}
}


const user2 = new User();
document.getElementById("login").addEventListener('submit',printLogin);
function printLogin(e){
    e.preventDefault();
    user2.setUserEmail(document.getElementById("email").value);
    user2.setUserPassword(document.getElementById("pwd").value);
    console.log(user2);
}