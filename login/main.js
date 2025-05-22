const nameField = document.getElementById("Email");
const emailField = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const errorMessage = document.querySelector(".text-wrong");

loginBtn.addEventListener("click", function (e) {
    e.preventDefault(); 

    const nameValue = nameField.value.trim();
    const emailValue = emailField.value.trim();

    errorMessage.textContent = "";

    if (!nameValue || !emailValue) {
        errorMessage.textContent = "Please fill in all fields !";
        errorMessage.style.color = "red";
        return; 
    }

    this.classList.add("hide-text"); 
    document.querySelector(".loader").classList.add("show"); 

    setTimeout(function () {
        document.querySelector(".loader").classList.remove("show"); 
        loginBtn.classList.remove("hide-text"); 
        window.location.href = "../webInter/index.html";
    }, 5000); 
});


function togglePassword() {
    var passwordInput = document.getElementById("password");
    var eyeIcon = document.querySelector(".eye");
    var eyeSlashIcon = document.querySelector(".eye-slash");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.style.display = "none";
        eyeSlashIcon.style.display = "inline";
    } else {
        passwordInput.type = "password";
        eyeIcon.style.display = "inline";
        eyeSlashIcon.style.display = "none";
    }
}



const emailInput = document.getElementById('Email');
const passwordInput = document.getElementById('password');
const submitBtn = document.getElementById('loginBtn');

function checkForm() {
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    const isGmail = emailValue.includes('@gmail.com');

    if (isGmail && passwordValue) {
        submitBtn.disabled = false;
        submitBtn.classList.add('enabled'); 
    } else {
        submitBtn.disabled = true;
        submitBtn.classList.remove('enabled'); 
    }
}

emailInput.addEventListener('input', checkForm);
passwordInput.addEventListener('input', checkForm);

checkForm();



function login() {
    const email = document.getElementById("Email").value;
    const passwordd = document.getElementById("password").value;

    // نحفظ البيانات مؤقتاً (تتقرى في الصفحة التانية)
    sessionStorage.setItem("tempEmail", email);
    sessionStorage.setItem("tempPassword", passwordd);
}

function skipLogin() {
    sessionStorage.removeItem("tempEmail");
    sessionStorage.removeItem("tempPassword");

    // امسح أي بيانات مكتوبة يدويًا
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userpassword");

    // نروح للصفحة التانية بدون حفظ بيانات
    window.location.href = "../webInter/index.html";
}


  VANTA.NET({
  el: "#vanta-bgd",
  mouseControls:false,
  touchControls: false,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  backgroundColor: 0x4f3866
})