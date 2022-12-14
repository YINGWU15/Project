class User {
    constructor(userName, password,fullName) {
        this.userName = userName;
        this.password = password;
        this.fullName = fullname;
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