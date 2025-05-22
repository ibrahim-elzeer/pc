function changepassword() {
    const newPassword = document.getElementById("newPassword").value;
  
    if (newPassword.trim() === "") {
      alert("من فضلك اكتب باسورد جديد");
      return;
    }
  
    // حفظ الباسورد الجديد في localStorage
    localStorage.setItem("userpassword", newPassword);
  
    alert("تم تغيير الباسورد بنجاح ✅");
    
    // ممكن تنظف الحقل بعد الحفظ

    window.location.href = "../detailsuser/index.html"; // غيّر الرابط حسب اسم الصفحة عندك
}
  
function togglePassword() {
    const passwordInput = document.getElementById("newPassword");
    const icon = document.querySelector(".toggle-password");
  
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      icon.textContent = "🙈"; // تغيير شكل الأيقونة لما الباسورد يبقى ظاهر
    } else {
      passwordInput.type = "password";
      icon.textContent = "👀"; // رجّعها تاني لو اتحجبت
    }
  }
  