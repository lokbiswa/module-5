let username = document.getElementById("username");
let password = document.getElementById("password");

let correctCredential = {
  user: "name",
  pass: "MyPass",
};
/* auto login if the user didn't logout in preview session.*/
function onLoginClick() {
  let user = username.value;
  let pass = password.value;
  // { user, pass }
  let userInput = { user, pass };
  let isCorrect = validateCredentials(userInput);
  console.log(userInput, isCorrect);

  if (isCorrect) {
    login(userInput);
    location.replace("/src/logout/logout.html");
  }
}

function onLoad() {
  let loggedIn = isLoggedIn();
  if (loggedIn) {
    sendToLogin();
  } else {
    // stays in login page
    console.log("You are not logged in");
  }
}
function sendToLogin() {
  console.log("you are logged in");
  location.replace("/src/logout/logout.html");
}
function isLoggedIn() {
  let credential = readLocalStor();
  if (credential == null) {
    console.debug("failed to get credentials");
    return false;
  }
  return validateCredentials(credential);
}
// check is the username and passwords are correct.
function validateCredentials(credential) {
  return (
    correctCredential.user === credential.user &&
    correctCredential.pass === credential.pass
  );
}
//checking is the user already logged in.
function readLocalStor() {
  let credentials = localStorage.getItem("credentials");

  if (credentials) {
    credentials = JSON.parse(credentials);
  }
  return credentials;
}
// set/storeCredentials
function writeToLocalStor(credential) {
  let credentials = JSON.stringify(credential);
  localStorage.setItem("credentials", credentials);
}
