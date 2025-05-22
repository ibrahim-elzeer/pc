const correctAnswers = {
    q1: 'ب',
    q2: 'ب',
    q3: 'ج',
    q4: 'ج',
    q5: 'ب'
  };
  
  document.getElementById("quizForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    let score = 0;
    let total = Object.keys(correctAnswers).length;
  
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => radio.disabled = true);
  
    let allAnswered = true;
    for (let key in correctAnswers) {
      const selected = document.querySelector(`input[name="${key}"]:checked`);
      if (!selected) {
        allAnswered = false;
        break;
      }
    }
  
    if (!allAnswered) {
      alert("يرجى الإجابة على جميع الأسئلة قبل الإرسال");
      radios.forEach(radio => radio.disabled = false);
      return;
    }
  
    for (let key in correctAnswers) {
      const selected = document.querySelector(`input[name="${key}"]:checked`);
      if (selected && selected.value === correctAnswers[key]) {
        score++;
      }
    }
  

    setTimeout(() => {
      let msg = "";
      if (score === total) {
        msg = "ممتاز! معلوماتك قوية جدًا 👏";
      } else if (score >= 3) {
        msg = "مستواك جيد، بس لسه في حاجات ممكن تتعلمها 💪";
      } else {
        msg = "واضح إنك محتاج تبدأ من الأساس، وإحنا معاك خطوة بخطوة 👨‍🏫";
      }
    
      document.getElementById("result").textContent = `عدد الإجابات الصحيحة: ${score} من ${total} - ${msg}`;
    }, 1000); 
    
  
  
    setTimeout(() => {
      document.getElementById("nextBtnContainer").innerHTML = `
        <div id="button2">التقدم الان</div>
        <div id="loader" style="display:none; margin-top: 10px;"></div>
        <div id="loaderr" style="display:none; font-weight:bold;">جاري التحميل...</div>
      `;
  
      document.getElementById("button2").addEventListener("click", function () {
        this.style.display = "none";
        document.getElementById("loader").style.display = "block";
        document.getElementById("loaderr").style.display = "block";
  
        setTimeout(() => {
          window.location.href = "../seconedpage/index.html";
        }, 2000);
      });
    },1000 );
  });
  