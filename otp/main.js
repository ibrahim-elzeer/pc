// دالة التحقق من النموذج
function validateForm(event) {
    event.preventDefault(); // منع إرسال النموذج بشكل تلقائي

    var inputs = document.querySelectorAll('.otp-input'); // جلب كل خانات إدخال OTP
    var allFilled = true; // فحص إذا كانت كل الخانات مملوءة وصحيحة

    // التحقق من أن كل الخانات تحتوي على أرقام وغير فارغة
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "" || isNaN(inputs[i].value)) {
            allFilled = false;
            break;
        }
    }

    if (allFilled) {
        // لو كل الخانات صحيحة، الانتقال إلى صفحة تسجيل الدخول
        window.location.href = '../login/index.html';
    } else {
        // لو في خانة غير صحيحة أو فارغة، إظهار رسالة تنبيه
        alert("يرجى إدخال جميع الأرقام بشكل صحيح");
    }
}

// دالة للانتقال تلقائيًا إلى الخانة التالية بعد إدخال رقم واحد
function moveToNext(currentInput, nextInputId) {
    // إذا كانت الخانة تحتوي على رقم واحد، يتم الانتقال للخانة التالية
    if (currentInput.value.length === 1 && nextInputId) {
        document.getElementById(nextInputId).focus();
    }
}
