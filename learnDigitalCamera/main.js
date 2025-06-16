// ✅ جلب العنصر اللي هيتحرك
const model = document.getElementById('model');

// ✅ إعدادات الحركة
const maxTranslationY = 2050;     // أقصى نزول للعنصر (اتجاه Y)
const maxRight = 1100;            // أقصى انزياح ناحية اليمين (X)
const maxLeft = 50;               // أقصى انزياح ناحية الشمال

// ✅ حساب نقاط التقسيم حسب ارتفاع الشاشة
const windowHeight = window.innerHeight;
const centerStart = windowHeight;           // بداية المنتصف
const bottomStart = windowHeight * 2;       // بداية الجزء التالت (السفلي)

let lastTranslateX = 0; // لتخزين آخر قيمة X لو تجاوزنا الحد الأقصى

// ✅ حدث التمرير (Scroll)
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;  // قيمة التمرير الحالية

  // حساب قيمة النزول الرأسي Y (ما يعديش الحد)
  const translateY = Math.min(scrollY, maxTranslationY);

  let translateX; // القيمة الأفقية X

  // ✅ لو لسه تحت الحد الأقصى
  if (scrollY < maxTranslationY) {

    if (scrollY < centerStart) {
      // 📌 الجزء الأول من الصفحة: العنصر بيتحرك يمين تدريجيًا
      const progress = scrollY / centerStart;
      translateX = maxRight * progress;

    } else if (scrollY >= centerStart && scrollY < bottomStart) {
      // 📌 الجزء الثاني: العنصر بيتحرك شمال تدريجيًا
      const progress = (scrollY - centerStart) / windowHeight;
      translateX = maxRight - (maxRight + maxLeft) * progress;

    } else {
      // 📌 الجزء الثالث: العنصر بيرجع تاني ناحية اليمين
      const progress = (scrollY - bottomStart) / windowHeight;
      translateX = -maxLeft + (maxRight + maxLeft) * progress;
    }

    // حفظ آخر قيمة X طالما لسه ما عديناش الحد
    lastTranslateX = translateX;

  } else {
    // ✅ لو تجاوز الحد، ثبت آخر موضع X
    translateX = lastTranslateX;
  }

  // ✅ تطبيق الحركة على العنصر
  model.style.transform = `translateY(${translateY}px) translateX(${translateX}px)`;
});


// ✅ كود تأثير الخلفية من VANTA.js (Fog effect)
VANTA.FOG({
  el: "#learnjfjf",             // العنصر اللي هيظهر عليه التأثير
  mouseControls: true,          // تفاعل مع الماوس
  touchControls: true,          // تفاعل مع التاتش
  gyroControls: false,          // بدون تحكم بالحركة الفيزيائية
  minHeight: 200.00,
  minWidth: 200.00,
  highlightColor: 0xff00d1,     // لون اللمعان
  midtoneColor: 0x371e26,       // اللون المتوسط
  lowlightColor: 0x000000,      // لون الظل
  baseColor: 0xca7d7d           // اللون الأساسي للخلفية
});
