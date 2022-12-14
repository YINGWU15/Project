import { fetchData, getCurrentUser } from './main.js'

// note class
class Note {
    constructor(userId,noteId, noteContent) {
        this.userId = userId;
        this.noteId = noteId;
      this.noteContent = noteContent;
    }
}


function allNotes(e) {
  e.preventDefault();

  let userID = getCurrentUser.userID;
  let note = new Note(userID);

  fetchData("/note/", note, "GET")
  .then((data) => {
    
  })
  .catch((err) =>{
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
  })
}


function addNote(e) {
  e.preventDefault();
  fetchData("/note/read", user, "POST")
  
  .then((data) => {
  })
  .catch((err) => {
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
  }) 
}
 
