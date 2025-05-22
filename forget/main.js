function redirectToPage(event) {
    event.preventDefault();  // يمنع إرسال النموذج

    var input = document.getElementById("inputField").value;

    // التحقق من أن البريد الإلكتروني يحتوي على صيغة صحيحة (مقارنة بـ @gmail.com بشكل صحيح)
    var emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;  // هذا التحقق من صيغة البريد الإلكتروني @gmail.com

    // التحقق إذا كان البريد الإلكتروني صالحًا
    if (emailRegex.test(input.trim())) {
        // إذا كان البريد الإلكتروني صحيحًا، سيتم التوجيه إلى صفحة OTP
        window.location.href = "../otp/index.html";  // قم بتغيير الرابط هنا
    } else {
        // إذا لم يكن البريد الإلكتروني صالحًا، يتم عرض تنبيه
        alert("يرجى إدخال بريد إلكتروني صحيح من نوع @gmail.com");
    }
}


