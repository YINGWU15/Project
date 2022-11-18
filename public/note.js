class Note{
    constructor (noteid){
    this.noteid = noteid;
}

getNoteid(){
    return this.noteid;
}
setNoteid(noteid){
    this.noteid = noteid;
}
}

const notes = new Note();
document.getElementById("note").addEventListener('submit',printNote);

function printNote(e){
    e.preventDefault();
    notes.setNoteid(document.getElementById("texts").value);
    console.log(notes);
}