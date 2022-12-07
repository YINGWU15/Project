const con = require("./db_connect");

  
  async function createTable2() {
    let sql=`CREATE TABLE IF NOT EXISTS notes (
      noteId INT NOT NULL AUTO_INCREMENT,
      userId INT NOT NULL AUTO_INCREMENT,
      content VARCHAR(255) NOT NULL,
      CONSTRAINT note_pk PRIMARY KEY(noteId),
      CONSTRAINT note_fk FOREIGN KEY(userId)
    ); `
    await con.query(sql);
  }
  createTable2();



  async function getAllNotes() {
    const sql = `SELECT * FROM notes;`;
    let note = await con.query(sql);
    console.log(note)
  }
  // Read Note 
  async function read(note) { 
    let cNote = await getNote(note);
    if(!cNote[0]) throw Error("Note not found");
    return cNote[0];
  }
  

  // Update Note function
  async function editNote(note) {
    let sql = `UPDATE notes 
      SET content = "${note.content}"
      WHERE noteId = ${note.noteId}
    `;
    await con.query(sql);
    let updatednote = await getNote(note);
    return updatedNote[0];
  }
  

  // Delete User function
  async function deleteNote(note) {
    let sql = `DELETE FROM notes
      WHERE noteId = ${note.noteId}
    `;
    await con.query(sql);
  }
  

  // Useful Functions
  async function getNote(note) {
    let sql;
  
    if(note.noteId) {
      sql = `
        SELECT * FROM notes
         WHERE noteId = ${note.noteId}
      `
    } else {
      sql = `
      SELECT * FROM notes 
        WHERE content = "${note.content}"
    `; 
    }
    return await con.query(sql);  
  }
  
  module.exports = { getAllNotes, read,  editNote, deleteNote};
