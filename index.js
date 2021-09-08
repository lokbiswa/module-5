const message = document.getElementById("message");
const button = document.getElementById("button");

function isLoggedIn() {
  let loggedIn = localStorage.getItem("is_logged_in");
  if (loggedIn === undefined) {
    localStorage.setItem("is_logged_in", false);
    return false;
  } else {
    return loggedIn;
  }
}

function login() {
  message.innerHTML = "You are Logged in";
  button.innerHTML = "Logout";
  localStorage.setItem("is_logged_in", true);
}

function logout() {
  message.innerHTML = "You are not logged in";
  button.innerHTML = "Login";
  localStorage.setItem("is_logged_in", false);
}

function handelLogin() {
  console.log(isLoggedIn);
  if (isLoggedIn) logout();
  else login();
  isLoggedIn = !isLoggedIn;
}
