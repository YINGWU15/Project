const notes = [
    {
      noteId: 1111,
      content: "This is my content!"
     
    },
    {
      userId: 2222,
      content: "This is a page!"
    },
    {
      userId: 3333,
      content: "This is a colorful world!"
    }
  ];
  
  function getAllNotes() {
    return notes;
  }
  
  module.exports = { getAllNotes };