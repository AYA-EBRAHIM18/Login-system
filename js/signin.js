//! Sign In

var email = document.querySelector("#email");
var password = document.querySelector("#password");
var logIn = document.querySelector("#logIn");
if (localStorage.getItem("usersInfo") != null) {
  userInfo = JSON.parse(localStorage.getItem("usersInfo"));
}
logIn.addEventListener("click", function () {
  if (check() == true) {
    for (var i = 0; i < userInfo.length; i++) {
      if (
        userInfo[i].email.toLowerCase() == email.value.toLowerCase() &&
        userInfo[i].password == password.value
      ) {
        localStorage.setItem("usernameSignIn", userInfo[i].name);
        open("./index3.html", "_self");
      } else {
        validateInfo(i);
      }
    }
  }
});

function validateInfo(idx) {
  if (userInfo[idx].email.toLowerCase() != email.value.toLowerCase()) {
    return Swal.fire({
      icon: "error",
      title: "Email doesn't exist",
    });
  }
  if (userInfo[idx].password != password.value) {
    return Swal.fire({
      icon: "error",
      title: "password is incorrect",
    });
  }
}

function check() {
  if (email.value == "" || password.value == "") {
    return Swal.fire({
      icon: "error",
      title: "Please, Enter the required inputs",
    });
  }
  if (localStorage.getItem("usersInfo") == null) {
    return Swal.fire({
      icon: "error",
      title: "Email doesn't exist",
    });
  }
  return true;
}
