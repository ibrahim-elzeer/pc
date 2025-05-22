function changeemail() {
    const newEmail = document.getElementById("newEmail").value;
  
    if (newEmail.trim() === "") {
      alert("من فضلك اكتب ايميل جديد");
      return;
    }
  
    // حفظ الباسورد الجديد في localStorage
    localStorage.setItem("userEmail", newEmail);
  
    alert("تم تغيير الباسورد بنجاح ✅");
    
    // ممكن تنظف الحقل بعد الحفظ

    window.location.href = "../detailsuser/index.html"; // غيّر الرابط حسب اسم الصفحة عندك
}
