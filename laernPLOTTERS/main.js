// العنصر اللي هيتحرك أثناء السكروول
const model = document.getElementById('model');

// أقصى حد للحركة الرأسية
const maxTranslationY = 2050;

// أقصى مدى للحركة الأفقية يمينًا وشمالًا
const maxRight = 1100;
const maxLeft = 50;

// حساب ارتفاع نافذة العرض
const windowHeight = window.innerHeight;

// نقط البداية للجزء الثاني والثالث من الحركة
const centerStart = windowHeight;        // لما توصل لمنتصف السكروول
const bottomStart = windowHeight * 2;    // لما توصل لآخر المرحلة الثانية

// لحفظ آخر إزاحة أفقية حصلت
let lastTranslateX = 0; 

// إضافة مستمع للسكروول
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // تحديد قيمة الحركة الرأسية بحيث لا تتعدى maxTranslationY
  const translateY = Math.min(scrollY, maxTranslationY);

  let translateX;

  if (scrollY < maxTranslationY) {
    // المرحلة 1: من أعلى الصفحة حتى منتصف الشاشة
    if (scrollY < centerStart) {
      const progress = scrollY / centerStart; // من 0 إلى 1
      translateX = maxRight * progress; // يتحرك من 0 إلى أقصى اليمين

    // المرحلة 2: من منتصف الشاشة حتى نهايتها
    } else if (scrollY >= centerStart && scrollY < bottomStart) {
      const progress = (scrollY - centerStart) / windowHeight; // من 0 إلى 1
      translateX = maxRight - (maxRight + maxLeft) * progress;
      // يتحرك من أقصى اليمين إلى أقصى الشمال

    // المرحلة 3: بعد نهاية المرحلة الثانية
    } else {
      const progress = (scrollY - bottomStart) / windowHeight; // من 0 إلى 1
      translateX = -maxLeft + (maxRight + maxLeft) * progress;
      // يرجع من أقصى الشمال إلى أقصى اليمين بالتدريج
    }

    // حفظ آخر قيمة translateX
    lastTranslateX = translateX;

  } else {
    // بعد maxTranslationY، يثبت عند آخر قيمة X
    translateX = lastTranslateX;
  }

  // تطبيق التحول على العنصر
  model.style.transform = `translateY(${translateY}px) translateX(${translateX}px)`;
});


// إضافة تأثير ضباب متحرك بالخلفية باستخدام مكتبة VANTA.js
VANTA.FOG({
  el: "#learnjfjf",             // العنصر اللي هيكون عليه التأثير
  mouseControls: true,          // يتحرك حسب الماوس
  touchControls: true,          // يدعم التاتش
  gyroControls: false,          // لا يستخدم الجايروسكوب
  minHeight: 200.00,            // أقل ارتفاع للتأثير
  minWidth: 200.00,             // أقل عرض للتأثير
  highlightColor: 0xff00d1,     // لون الإضاءة البارزة
  midtoneColor: 0x371e26,       // لون الإضاءة المتوسطة
  lowlightColor: 0x0,           // الإضاءة المنخفضة (أسود)
  baseColor: 0xca7d7d           // اللون الأساسي للخلفية
});
