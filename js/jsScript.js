// Register

const registerBtn = document.querySelector(".register");
let state = 0;

registerBtn.addEventListener("click", () => {



  if (state === 0) {
    registerBtn.textContent = "Login";
    state = 1;

  }

  else if (state === 1) {
    registerBtn.textContent = "Log Out";
    registerBtn.style.backgroundColor = "Purple";
    state = 2;

  }

  else {
    registerBtn.textContent = "Register";
    registerBtn.style.backgroundColor = "#13B82E";
    state = 0;

  }
});

// reister to login page

document.getElementById("register").addEventListener(
  "click", function () {
    window.location.href = "login.html";
  });


/* ---------notification--------------- */

const bellBtn = document.getElementById("bellBtn");
const closeNoti = document.getElementById("closeNoti");
const notificationBox = document.querySelector(".notification");

// Toggle notification on bell click
bellBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // prevent click from bubbling to document
  notificationBox.style.display =
    notificationBox.style.display === "block" ? "none" : "block";
});

// Close button inside the notification
closeNoti.addEventListener("click", () => {
  notificationBox.style.display = "none";
});

// Close on clicking outside
document.addEventListener("click", (e) => {
  // If notification is open AND click is outside notification + bell
  if (
    notificationBox.style.display === "block" &&
    !notificationBox.contains(e.target) &&
    e.target !== bellBtn
  ) {
    notificationBox.style.display = "none";
  }
});

