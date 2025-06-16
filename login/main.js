// -----------------------------
// جلب العناصر من واجهة المستخدم
// -----------------------------
const nameField = document.getElementById("Email"); // حقل البريد الإلكتروني
const emailField = document.getElementById("password"); // حقل كلمة المرور
const loginBtn = document.getElementById("loginBtn"); // زر تسجيل الدخول
const errorMessage = document.querySelector(".text-wrong"); // مكان ظهور رسالة الخطأ

// -----------------------------
// عند الضغط على زر تسجيل الدخول
// -----------------------------
loginBtn.addEventListener("click", function (e) {
    e.preventDefault(); // منع إعادة تحميل الصفحة

    const nameValue = nameField.value.trim(); // إزالة المسافات من الإيميل
    const emailValue = emailField.value.trim(); // إزالة المسافات من الباسورد

    errorMessage.textContent = ""; // تفريغ رسالة الخطأ القديمة

    // التحقق من ملء كل الحقول
    if (!nameValue || !emailValue) {
        errorMessage.textContent = "Please fill in all fields !";
        errorMessage.style.color = "red";
        return;
    }

    this.classList.add("hide-text"); // إخفاء نص الزر
    document.querySelector(".loader").classList.add("show"); // إظهار اللودر

    // محاكاة عملية تسجيل الدخول
    setTimeout(function () {
        document.querySelector(".loader").classList.remove("show"); // إخفاء اللودر
        loginBtn.classList.remove("hide-text"); // إعادة الزر
        window.location.href = "../imgstu/index.html"; // الانتقال للصفحة التالية
    }, 5000);
});

// -----------------------------
// إظهار/إخفاء كلمة المرور
// -----------------------------
function togglePassword() {
    var passwordInput = document.getElementById("password");
    var eyeIcon = document.querySelector(".eye");
    var eyeSlashIcon = document.querySelector(".eye-slash");

    if (passwordInput.type === "password") {
        passwordInput.type = "text"; // عرض كلمة السر
        eyeIcon.style.display = "none"; // إخفاء العين المفتوحة
        eyeSlashIcon.style.display = "inline"; // إظهار العين المغلقة
    } else {
        passwordInput.type = "password"; // إخفاء كلمة السر
        eyeIcon.style.display = "inline";
        eyeSlashIcon.style.display = "none";
    }
}

// -----------------------------
// التحقق من صحة الفورم لحظيًا
// -----------------------------
const emailInput = document.getElementById('Email');
const passwordInput = document.getElementById('password');
const submitBtn = document.getElementById('loginBtn');

function checkForm() {
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    const isGmail = emailValue.includes('@gmail.com');

    if (isGmail && passwordValue) {
        submitBtn.disabled = false; // تفعيل الزر
        submitBtn.classList.add('enabled'); // تغيير شكله أو لونه
    } else {
        submitBtn.disabled = true; // تعطيل الزر
        submitBtn.classList.remove('enabled');
    }
}

emailInput.addEventListener('input', checkForm);
passwordInput.addEventListener('input', checkForm);
checkForm(); // فحص أولي عند تحميل الصفحة

// -----------------------------
// حفظ البيانات في الجلسة
// -----------------------------
function login() {
    const email = document.getElementById("Email").value;
    const passwordd = document.getElementById("password").value;

    sessionStorage.setItem("tempEmail", email); // حفظ الإيميل
    sessionStorage.setItem("tempPassword", passwordd); // حفظ الباسورد
}

// -----------------------------
// تخطي تسجيل الدخول
// -----------------------------
function skipLogin() {
    sessionStorage.removeItem("tempEmail");
    sessionStorage.removeItem("tempPassword");

    localStorage.removeItem("userEmail");
    localStorage.removeItem("userpassword");

    window.location.href = "../imgstu/index.html"; // التوجه للصفحة مباشرة
}

// -----------------------------
// تأثير الخلفية باستخدام VANTA.js
// -----------------------------
VANTA.NET({
  el: "#vanta-bgd", // العنصر اللي هيتطبق عليه التأثير
  mouseControls:false, // تعطيل التحكم بالماوس
  touchControls: false, // تعطيل التحكم باللمس
  gyroControls: false, // تعطيل الجيروسكوب
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  backgroundColor: 0x4f3866 // لون الخلفية البنفسجي
});
