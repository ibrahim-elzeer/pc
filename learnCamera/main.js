// أقصى ارتفاع هيوصل له العنصر أثناء السكروول
const maxTranslationY = 3000;

// أقصى حركة لليمين والشمال على المحور الأفقي X
const maxRight = 1100;
const maxLeft = 50;

// طول شاشة العرض بالكامل (ارتفاع)
const windowHeight = window.innerHeight;

// نقطتين بنستخدمهم لتحديد مراحل الحركة (3 مراحل)
const centerStart = windowHeight;         // بداية الجزء الثاني
const bottomStart = windowHeight * 2;     // بداية الجزء الثالث

// لتخزين آخر قيمة X علشان نثبتها لما السكروول يتعدى الحد
let lastTranslateX = 0; 

// استماع لحدث السكروول
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY; // القيمة الحالية للسكروول من الأعلى

  // حساب الحركة الرأسية (ما تتعداش 3000)
  const translateY = Math.min(scrollY, maxTranslationY);

  let translateX; // هنحسب بيها الحركة الأفقية

  if (scrollY < maxTranslationY) {

    if (scrollY < centerStart) {
      // المرحلة الأولى: من الأعلى → يتحرك لليمين تدريجيًا
      const progress = scrollY / centerStart; // نسبة التقدم من 0 إلى 1
      translateX = maxRight * progress;

    } else if (scrollY >= centerStart && scrollY < bottomStart) {
      // المرحلة الثانية: من منتصف الشاشة → يتحرك لليسار تدريجيًا
      const progress = (scrollY - centerStart) / windowHeight;
      translateX = maxRight - (maxRight + maxLeft) * progress;

    } else {
      // المرحلة الثالثة: من تحت → يرجع لليمين تاني تدريجيًا
      const progress = (scrollY - bottomStart) / windowHeight;
      translateX = -maxLeft + (maxRight + maxLeft) * progress;
    }

    // حفظ آخر قيمة X طالما لسه جوه النطاق
    lastTranslateX = translateX;

  } else {
    // لو عدينا الحد، نثبت العنصر على آخر مكان وصله
    translateX = lastTranslateX;
  }

  // تطبيق الحركة على العنصر
  model.style.transform = `translateY(${translateY}px) translateX(${translateX}px)`;
});




VANTA.FOG({
  el: "#learnjfjf",            // العنصر اللي هيظهر فيه التأثير
  mouseControls: true,         // يتحرك مع الماوس
  touchControls: true,         // يتحرك مع اللمس
  gyroControls: false,         // مش بيستخدم الجايروسكوب
  minHeight: 200.00,
  minWidth: 200.00,
  highlightColor: 0xff00d1,    // لون الإضاءة القوية
  midtoneColor: 0x371e26,      // لون الإضاءة المتوسطة
  lowlightColor: 0x0,          // الإضاءة الضعيفة (أسود)
  baseColor: 0xca7d7d          // اللون الأساسي للخلفية
});
