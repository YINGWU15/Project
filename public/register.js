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


const user1 = new User();

document.getElementById("register").addEventListener('submit',printRegister);
   function printRegister(e){
    e.preventDefault();

    user1.setUserFirstName(document.getElementById("fname").value);
    user1.setUserLastName(document.getElementById("lname").value);
    user1.setUserPassword(document.getElementById("pwd").value);
    user1.setUserEmail(document.getElementById("useremail").value);
    console.log(user1);
}
