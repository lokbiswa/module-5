let statusIcon = document.getElementById("status-icon");
let iconBadge = document.getElementById("icon-badge");

// icon & color change hover effect
function onMouseEnter() {
  statusIcon.src = "../../asset/cross.svg";
  iconBadge.style.background = "#d98d8d";
}
// revert when not on hover
function onMouseLeave() {
  statusIcon.src = "../../asset/check.svg";
  iconBadge.style.background = "#52b69a";
}
// so user is logged out;
function logout() {
  localStorage.removeItem("credentials");
}
function sendToLogin() {
  let isLoggedIn = readLocalStor();
  if (isLoggedIn) {
    console.log("You are Logged in");
  } else {
    location.replace("../index.html");
  }
}

// check localStorage if the user is logged in.
function readLocalStor() {
  let credentials = localStorage.getItem("credentials");
  if (credentials) {
    credentials = JSON.parse(credentials);
  }
  return credentials;
}
