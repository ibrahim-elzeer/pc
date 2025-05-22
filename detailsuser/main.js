function togglePassword() {
    const passwordInput = document.getElementById('Password');
    const passwordIcon = document.querySelector('.toggle-password');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordIcon.textContent = '🙈'; 
    } else {
        passwordInput.type = 'password';
        passwordIcon.textContent = '👀';
    }
}

const email = sessionStorage.getItem("tempEmail");
const password = sessionStorage.getItem("tempPassword");

if (email && password) {
  // المستخدم فعلاً سجل الدخول
  localStorage.setItem("userEmail", email);
  localStorage.setItem("userpassword", password);

  sessionStorage.removeItem("tempEmail");
  sessionStorage.removeItem("tempPassword");
}

const savedEmail = localStorage.getItem("userEmail");
const savedPassword = localStorage.getItem("userpassword");

document.getElementById("Email").value = savedEmail || "لم يتم تسجيل الدخول";
document.getElementById("Password").value = savedPassword || "لم يتم تسجيل الدخول";

const changePasswordBtn = document.getElementById("changePasswordBtn");
const changeEmailBtn = document.getElementById("changeEmailBtn");
if (savedEmail && savedPassword) {
  changePasswordBtn.disabled = false;  
  changeEmailBtn.disabled = false;  

} else {
  changePasswordBtn.disabled = true;  
  changeEmailBtn.disabled = true;  
}