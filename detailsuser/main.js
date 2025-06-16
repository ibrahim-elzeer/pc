// دالة لتبديل عرض كلمة السر بين نص عادي ونقاط
function togglePassword() {
    const passwordInput = document.getElementById('Password'); // جلب عنصر إدخال كلمة السر
    const passwordIcon = document.querySelector('.toggle-password'); // جلب أيقونة تبديل الرؤية

    // لو نوع الإدخال "password"، نخليه "text" علشان نعرضه
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text'; // عرض كلمة السر كنص
        passwordIcon.textContent = '🙈'; // تغيير الأيقونة لعين مغلقة
    } else {
        passwordInput.type = 'password'; // إخفاء كلمة السر
        passwordIcon.textContent = '👀'; // تغيير الأيقونة لعين مفتوحة
    }
}

// جلب الإيميل والباسورد من sessionStorage (يعني تسجيل دخول مؤقت)
const email = sessionStorage.getItem("tempEmail");
const password = sessionStorage.getItem("tempPassword");

// لو تم تسجيل الدخول بالفعل
if (email && password) {
  // تخزين البيانات في localStorage لحفظها حتى بعد إغلاق المتصفح
  localStorage.setItem("userEmail", email);
  localStorage.setItem("userpassword", password);

  // إزالة البيانات من sessionStorage بعد نقلها
  sessionStorage.removeItem("tempEmail");
  sessionStorage.removeItem("tempPassword");
}

// جلب البيانات من localStorage لعرضها في الحقول
const savedEmail = localStorage.getItem("userEmail");
const savedPassword = localStorage.getItem("userpassword");

// عرض البيانات في حقول الإدخال أو إظهار رسالة لو مفيش بيانات محفوظة
document.getElementById("Email").value = savedEmail || "لم يتم تسجيل الدخول";
document.getElementById("Password").value = savedPassword || "لم يتم تسجيل الدخول";

// جلب الأزرار الخاصة بتغيير كلمة السر والإيميل
const changePasswordBtn = document.getElementById("changePasswordBtn");
const changeEmailBtn = document.getElementById("changeEmailBtn");

// لو في بيانات محفوظة، نفعل الأزرار
if (savedEmail && savedPassword) {
  changePasswordBtn.disabled = false;  
  changeEmailBtn.disabled = false;  
} else {
  // لو مفيش بيانات، نعطل الأزرار
  changePasswordBtn.disabled = true;  
  changeEmailBtn.disabled = true;  
}
