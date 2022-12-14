import { fetchData, setCurrentUser } from './main.js'

// user class
class User {
    constructor(userName, password, fullName) {
      this.userName = userName;
      this.password = password;
      this.fullName = fullName;
    }
    getUserName() {
      return this.userName;
    }
}

// register functionality
let regForm = document.getElementById("register");
if(regForm) regForm.addEventListener('submit', register);

function register(e) {
  e.preventDefault();

  let userName = document.getElementById("username").value;
  let password = document.getElementById("pwd").value;
  let user = new User(userName, password);

  fetchData("/users/register", user, "POST")
  .then((data) => {
    setCurrentUser(data);
    window.location.href = "note.html";
  })
  .catch((err) =>{
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
  })
}

// login functionality
let loginForm = document.getElementById("login");
if(loginForm) loginForm.addEventListener('submit', login);

function login(e) {
  e.preventDefault();

  let userName = document.getElementById("username").value;
  let password = document.getElementById("pswd").value;
  let user = new User(userName, password);

  fetchData("/users/login", user, "POST")
  .then((data) => {
    setCurrentUser(data);
    window.location.href = "note.html";
  })
  .catch((err) => {
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
  }) 
}
 
