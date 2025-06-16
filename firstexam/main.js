const correctAnswers = {
  q1: 1,   // ب
  q2: 1,   // ب
  q3: 2,   // ج
  q4: 2,   // ج
  q5: 2,   // معالجة الرسوميات (GPU)
  q6: 1,   // تحويل الطاقة الكهربائية لتغذية المكونات
  q7: 2,   // RAM
  q8: 0,   // ربط كل مكونات الحاسوب ببعضها
  q9: 2,   // الماوس
  q10: 0,  // SSD أسرع وأغلى من HDD
  q11: 1,  // الجسر الشمالي
  q12: 1,  // SATA
  q13: 0,  // تشغيل الكمبيوتر عن بُعد عبر الشبكة
  q14: 2,  // RAM
  q15: 2,  // Mini-ITX
  q16: 1,  // خطأ (اللوحة الأم ليست مجرد وسيط لنقل الكهرباء)
  q17: 0,  // صح (Socket 478 لمعالجات Intel Pentium 4)
  q18: 1,  // خطأ (موصل طاقة ATX لا يغذي كرت الشاشة مباشرة)
  q19: 1,  // خطأ (فتحات PCI ليست فقط لتوصيل RAM)
  q20: 1,  // خطأ (شريحة الجسر الجنوبي ليست مسؤولة عن توصيل المعالج بالذاكرة مباشرة)
  q21: 2,  // الميكروفون (وحدة إدخال)
  q22: 1,  // الإنجليزية
  q23: 2,  // النقل (السحب والإفلات)
  q24: 1,  // الراسمات (وحدة إخراج لطباعة الرسومات)
  q25: 1,  // الماسح الضوئي
  q26: 2,  // الشاشة (عرض بيانات نصية ومرئية)
  q27: 0,  // الميكروفون (وحدة إدخال صوتية)
  q28: 2,  // الكاميرا الرقمية (وحدة إدخال صور)
  q29: 0,  // صح (الكاميرا الرقمية وحدة إدخال)
  q30: 1,  // خطأ (السماعات ليست وحدة إدخال)
  q31: 1,  // خطأ (الفأرة لا تحتوي دائمًا على ثلاثة أزرار)
  q32: 0,  // صح (الماسح الضوئي لإدخال الصور)
  q33: 0,  // صح (لوحة المفاتيح بها مفاتيح أرقام خاصة)
  q34: 1,  // خطأ (السماعات ليست وحدة إدخال موسيقى)
  q35: 1,  // خطأ (الفأرة تُستخدم للإشارة والنقل والاختيار)
  q36: 0,  // صح (وحدة الاسطوانات تستخدم لإدخال البيانات عن طريق CD/DVD)
  q37: 1,  // الزجاج أو البلاستيك (مصنع منه العدسات)
  q38: 2,  // سطح محدب وآخر مقعر (السطح المقوس في العدسة)
  q39: 2,  // عدسة ثابتة (بعد بؤري واحد)
  q40: 1,  // جودة التصوير أفضل مع فتحة عدسة أكبر
  q41: 3,  // تحويل الصورة البصرية إلى رقمية (المستشعر)
  q42: 1,  // CMOS وCCD (أنواع مستشعرات شهيرة)
  q43: 3,  // بشكل مباشر (في الكاميرات بدون مرآة)
  q44: 2,  // ذات العدسات القابلة للفصل (حامل العدسة)
  q45: 2,  // الميكروفون (وحدة إدخال)
  q46: 1,  // الإنجليزية (تغيير اللغة عبر Alt + Shift)
  q47: 2,  // النقل (السحب والإفلات)
  q48: 1,  // الراسمات (طباعة رسومات بيانية)
  q49: 0,  // المستشعر (المكون الرئيسي في الكاميرا الرقمية)
  q50: 1   // الطابعة (وحدة إخراج)
};

  
// عند إرسال النموذج (submit) الخاص بالاختبار
document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault(); // منع إعادة تحميل الصفحة عند الإرسال

  let score = 0; // عدد الإجابات الصحيحة
  let total = Object.keys(correctAnswers).length; // عدد الأسئلة

  // تعطيل كل الاختيارات بعد الضغط على زر الإرسال (عشان المستخدم ميتلاعبش بالنتيجة)
  const radios = document.querySelectorAll('input[type="radio"]');
  radios.forEach(radio => radio.disabled = true);

  let allAnswered = true; // التحقق هل كل الأسئلة تم الإجابة عليها

  // المرور على كل سؤال والتأكد إنه تم اختياره
  for (let key in correctAnswers) {
    const selected = document.querySelector(`input[name="${key}"]:checked`);
    if (!selected) {
      allAnswered = false;
      break;
    }
  }

  // لو في سؤال مش مجاوب عليه، نعرض تنبيه ونرجع نفعّل الاختيارات
  if (!allAnswered) {
    alert("يرجى الإجابة على جميع الأسئلة قبل الإرسال");
    radios.forEach(radio => radio.disabled = false);
    return;
  }

  // حساب النتيجة النهائية من خلال مقارنة الاختيارات مع الإجابات الصحيحة
  for (let key in correctAnswers) {
    const selected = document.querySelector(`input[name="${key}"]:checked`);
    if (selected && parseInt(selected.value) === correctAnswers[key]) {
      score++;
    }
  }

  // بعد ثانية واحدة، يتم عرض الرسالة حسب النتيجة
  setTimeout(() => {
    let msg = "";
    if (score === total) {
      msg = "ممتاز! معلوماتك قوية جدًا 👏";
    } else if (score >= 47) {
      msg = "مستواك جيد، بس لسه في حاجات ممكن تتعلمها 💪";
    } else {
      msg = "واضح إنك محتاج تبدأ من الأساس، وإحنا معاك خطوة بخطوة 👨‍🏫";
    }

    // عرض النتيجة في عنصر HTML يحمل id="result"
    document.getElementById("result").textContent = `عدد الإجابات الصحيحة: ${score} من ${total} - ${msg}`;
  }, 1000);

  // بعد ثانية كمان، نظهر زر "التقدم الآن" اللي ينقل المستخدم لصفحة ثانية
  setTimeout(() => {
    document.getElementById("nextBtnContainer").innerHTML = `
      <div id="button2">التقدم الان</div>
      <div id="loader" style="display:none; margin-top: 10px;"></div>
      <div id="loaderr" style="display:none; font-weight:bold;">جاري التحميل...</div>
    `;

    // عند الضغط على زر التقدم
    document.getElementById("button2").addEventListener("click", function () {
      this.style.display = "none"; // إخفاء الزر
      document.getElementById("loader").style.display = "block"; // إظهار لودر التحميل
      document.getElementById("loaderr").style.display = "block"; // إظهار النص

      // بعد 2 ثانية، يتم تحويل المستخدم إلى صفحة جديدة
      setTimeout(() => {
        window.location.href = "../seconedpage/index.html";
      }, 2000);
    });
  }, 1000);
});
