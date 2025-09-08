// =========================
//   TAB SWITCHING
// =========================
const loginTab = document.getElementById("login-tab");
const signupTab = document.getElementById("signup-tab");

// Forms
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");

// Extra links
const toSignup = document.getElementById("to-signup");
const toLogin = document.getElementById("to-login");

// Switch to Login
function showLogin() {
  loginTab.classList.add("active");
  signupTab.classList.remove("active");
  loginForm.classList.add("active");
  signupForm.classList.remove("active");
}

// Switch to Signup
function showSignup() {
  signupTab.classList.add("active");
  loginTab.classList.remove("active");
  signupForm.classList.add("active");
  loginForm.classList.remove("active");
}

loginTab.addEventListener("click", showLogin);
signupTab.addEventListener("click", showSignup);
toSignup.addEventListener("click", (e) => { e.preventDefault(); showSignup(); });
toLogin.addEventListener("click", (e) => { e.preventDefault(); showLogin(); });


// =========================
//   FORM VALIDATION
// =========================

// Username rule: letters, numbers, underscore only
const usernameRegex = /^[A-Za-z0-9_]+$/;

// Password rule: at least 8 chars, 1 uppercase, 1 special char
const passwordRegex = /^(?=.[A-Z])(?=.[!@#$%^&*])(?=.{8,})/;


// ----- Signup Validation -----
signupForm.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent default submit

  const username = signupForm.querySelector('input[type="text"]').value.trim();
  const email = signupForm.querySelector('input[type="email"]').value.trim();
  const password = signupForm.querySelector('input[type="password"]').value.trim();

  // Empty check
  if (!username || !email || !password) {
    alert("⚠️ All fields must be filled!");
    return;
  }

  // Username validation
  if (!usernameRegex.test(username)) {
    alert("⚠️ Username can only contain letters, numbers, and underscore (_).");
    return;
  }

  // Password validation
  if (!passwordRegex.test(password)) {
    alert("⚠️ Password must be at least 8 characters long, include 1 uppercase letter and 1 special character.");
    return;
  }

  // Success
  alert("✅ Signup successful!");
  signupForm.reset();
});


// ----- Login Validation -----
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = loginForm.querySelector('input[type="email"]').value.trim();
  const password = loginForm.querySelector('input[type="password"]').value.trim();

  // Empty check
  if (!email || !password) {
    alert("⚠️ Please fill in both email and password!");
    return;
  }

  // Success
  alert("✅ Login successful!");
  loginForm.reset();
});