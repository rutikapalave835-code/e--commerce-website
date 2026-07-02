function signup() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (!user || !pass) {
    alert("Fill all fields");
    return;
  }

  localStorage.setItem("user", user);
  localStorage.setItem("pass", pass);

  alert("Signup successful!");
  window.location.href = "login.html";
}

function login() {
  const user = document.getElementById("loginUser").value;
  const pass = document.getElementById("loginPass").value;

  const savedUser = localStorage.getItem("user");
  const savedPass = localStorage.getItem("pass");

  if (user === savedUser && pass === savedPass) {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "index.html";
  } else {
    alert("Invalid credentials");
  }
}

function logout() {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "login.html";
}