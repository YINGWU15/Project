const users = [
    {
      userId: 12345,
      userName: "mara",
      password: "marapwd"
    },
    {
      userId: 45678,
      userName: "emmy",
      password: "emmypwd"
    },
    {
      userId: 78910,
      userName: "haley",
      password: "haleypwd"
    }
  ];
  
  function getAllUsers() {
    return users;
  }
  

  module.exports = { getAllUsers};