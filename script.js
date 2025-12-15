// Data login
const validUsername = "admin";
const validPassword = "12345";

// LOGIN
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (username === validUsername && password === validPassword) {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("username", username);
    window.location.href = "dashboard.html";
  } else {
    error.textContent = "Username atau password salah!";
  }
}

// CEK LOGIN
function checkLogin() {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";
  }
}

// LOGOUT
function logout() {
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("username");
  window.location.href = "index.html";
}

// DASHBOARD
function loadDashboard() {
  const username = localStorage.getItem("username") || "User";
  document.getElementById("welcome").textContent = `Selamat Datang, ${username}`;
}

// UPLOAD GAMBAR PRODUK
function uploadImage() {
  const fileInput = document.getElementById("productImage");
  const preview = document.getElementById("imagePreview");

  if (fileInput.files && fileInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const img = document.createElement("img");
      img.src = e.target.result;
      preview.appendChild(img);
    };
    reader.readAsDataURL(fileInput.files[0]);
  } else {
    alert("Pilih gambar terlebih dahulu!");
  }
}
script.js
