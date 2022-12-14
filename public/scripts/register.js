class User {
    constructor(userName, password) {
        this.userName = userName;
        this.password = password;
}
getUserName(){
    return this.userName;
}
getUserPassword(){
    return this.password;
}
getFullName(){
    return this.fullName
}
setUserName(userName){
    this.userName = userName;
}
setUserPassword(password){
    this.password = password;
}
setFullName(fullName){
    this.fullName =fullName;
}
}


const user1 = new User();

document.getElementById("register").addEventListener('submit',printRegister);
   function printRegister(e){
    e.preventDefault();

    user1.setUserName(document.getElementById("username").value);
    user1.setUserPassword(document.getElementById("pwd").value);
    user1.setUFullName(document.getElementById("fname").value);
    console.log(user1);
}