let userinfo = JSON.parse(localStorage.getItem("items")) || [];


function checkinfo() {
  let username = document.getElementById("user").value;
  let Password = document.getElementById("pass").value;

  let existingUser = userinfo.find(
    (user) => user.user_information === username
  );

  if (existingUser) {
    if (Password == existingUser.password) {
      alert("Successfully Logged In");
    } else {
      alert("Wrong password");
    }
  }
  console.log("hello we entered");
}

//for register
function databank() {
  let username = document.getElementById("user").value;
  let password = document.getElementById("pass").value;
  let role = document.getElementById('role').value;
  if (username == "" || password == "") {
    alert("Please fill out all fields");
  }
  let existingUser = userinfo.find(
    (user) => user.user_information === username
  );

  if (existingUser) {
    alert("Username already exists. Please choose another username.");
    return;
  }
  userinfo.push({ user_information: username, password: password ,role:role});
  localStorage.setItem("items", JSON.stringify(userinfo));
  console.log(JSON.parse(localStorage.getItem("items")));
}
