//! Log Out

var logOut = document.querySelector("#logOut");
var username = localStorage.getItem("usernameSignIn");
if (username) {
  document.querySelector("#greeting").innerHTML = "Welcome " + username;
}

logOut.addEventListener("click", function () {
  localStorage.removeItem("usernameSignIn");
  open("./index.html", "_self");
});

if (username == null) {
  open("./index.html", "_self");
}
