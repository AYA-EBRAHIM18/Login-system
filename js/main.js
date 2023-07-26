var signUpName = document.querySelector("#signUpName");
var signUpEmail = document.querySelector("#signUpEmail");
var signUpPassword = document.querySelector("#signUpPassword");
var signBtn = document.querySelector("#signBtn");
var userInfo = [];

if (localStorage.getItem("usersInfo") != null) {
  userInfo = JSON.parse(localStorage.getItem("usersInfo"));
}

signBtn.addEventListener("click", function () {
  var usersInfo = {
    name: signUpName.value,
    email: signUpEmail.value,
    password: signUpPassword.value,
  };

  if (validateForm() == true) {
    userInfo.push(usersInfo);
    localStorage.setItem("usersInfo", JSON.stringify(userInfo));
    location.href = "./index.html";
  } else {
    validateForm();
  }
});

function validateForm() {
  var nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
  var emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
  var passRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  if (
    signUpName.value == "" &&
    signUpEmail.value == "" &&
    signUpPassword.value == ""
  ) {
    return Swal.fire({
      icon: "error",
      title: "Please, Enter the required inputs",
      html: '<h6> <i class="fa-solid fa-circle-exclamation mx-2 blue-color"></i>Site name must contain at least 3 characters</h6>',
    });
  } else {
    for (var i = 0; i < userInfo.length; i++) {
      if (signUpEmail.value == userInfo[i].email) {
        return Swal.fire({
          icon: "error",
          title: "Email already exists",
        });
      }
    }
    if (nameRegex.test(signUpName.value) == false) {
      return Swal.fire({
        icon: "error",
        title: " Name is not valid",
        html: '<h6> <i class="fa-solid fa-circle-exclamation mx-2 blue-color"></i> Name must contain at least two words with whitespace</h6>',
      });
    }
    if (emailRegex.test(signUpEmail.value) == false) {
      return Swal.fire({
        icon: "error",
        title: " Email is not valid",
      });
    }
    if (passRegex.test(signUpPassword.value) == false) {
      return Swal.fire({
        icon: "error",
        title: " Password is not valid",
        html: '<h6> <i class="fa-solid fa-circle-exclamation mx-2 blue-color"></i>Password must start with a capital letter </h6> <h6> <i class="fa-solid fa-circle-exclamation mx-2 blue-color"></i>Password must contain at least one special character  </h6> <h6> <i class="fa-solid fa-circle-exclamation mx-2 blue-color"></i>Password must contain at least one numeric value </h6> <h6> <i class="fa-solid fa-circle-exclamation mx-2 blue-color"></i>Password must be at least 8 characters in length  </h6>',
      });
    }
  }
  return true;
}
