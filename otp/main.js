function validateForm(event) {
    event.preventDefault();  


    var inputs = document.querySelectorAll('.otp-input');
    var allFilled = true;

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "" || isNaN(inputs[i].value)) {
            allFilled = false;
            break;
        }
    }

    if (allFilled) {
        window.location.href = '../login/index.html';  
    } else {
        alert("يرجى إدخال جميع الأرقام بشكل صحيح");
    }
}

function moveToNext(currentInput, nextInputId) {
    if (currentInput.value.length === 1 && nextInputId) {
        document.getElementById(nextInputId).focus();
    }
}
