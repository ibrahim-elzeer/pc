// ✅ جلب العنصر اللي هيتم تحريكه أثناء التمرير
const model = document.getElementById('model');

// ✅ إعدادات التحريك
const maxTranslationY = 2050; // أقصى حد للتحرك لأسفل
const maxRight = 1100;        // أقصى تحرك لليمين
const maxLeft = 50;           // أقصى تحرك لليسار

// ✅ حساب ارتفاع الشاشة
const windowHeight = window.innerHeight;
const centerStart = windowHeight;        // بداية منتصف الشاشة
const bottomStart = windowHeight * 2;    // بداية أسفل الشاشة

let lastTranslateX = 0; // تخزين آخر قيمة X لو المستخدم عدى الحد الأقصى

// ✅ عند التمرير - Scroll Event
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY; // مقدار التمرير العمودي

  const translateY = Math.min(scrollY, maxTranslationY); // مايتعداش الحد اللي فوق

  let translateX;

  if (scrollY < maxTranslationY) {
    if (scrollY < centerStart) {
      // 📌 الجزء الأول: تحريك نحو اليمين تدريجيًا
      const progress = scrollY / centerStart;
      translateX = maxRight * progress;
    } else if (scrollY >= centerStart && scrollY < bottomStart) {
      // 📌 الجزء الثاني: تحريك نحو اليسار تدريجيًا
      const progress = (scrollY - centerStart) / windowHeight;
      translateX = maxRight - (maxRight + maxLeft) * progress;
    } else {
      // 📌 الجزء الثالث: يرجع لليمين تدريجيًا
      const progress = (scrollY - bottomStart) / windowHeight;
      translateX = -maxLeft + (maxRight + maxLeft) * progress;
    }

    // ✅ حفظ آخر قيمة X
    lastTranslateX = translateX;
  } else {
    // ✅ لو عدى الحد، يثبت على آخر قيمة
    translateX = lastTranslateX;
  }

  // ✅ تنفيذ التحريك فعليًا
  model.style.transform = `translateY(${translateY}px) translateX(${translateX}px)`;
});


// ✅ إضافة تأثير الخلفية باستخدام مكتبة VANTA.js
VANTA.FOG({
  el: "#learnjfjf",         // العنصر اللي عليه التأثير
  mouseControls: true,      // تأثير بالفأرة
  touchControls: true,      // تأثير باللمس
  gyroControls: false,      // بدون الجيروسكوب
  minHeight: 200.00,
  minWidth: 200.00,
  highlightColor: 0xff00d1, // لون الإضاءة
  midtoneColor: 0x371e26,   // لون الوسط
  lowlightColor: 0x0,       // اللون الداكن
  baseColor: 0xca7d7d       // لون الخلفية الأساسي
});
