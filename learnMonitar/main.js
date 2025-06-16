// الحصول على العنصر الذي يحمل المعرّف "model"
const model = document.getElementById('model');

// تحديد أقصى قيمة للتحرك عموديًا وأفقيًا
const maxTranslationY = 2050; // أقصى نزول للعنصر عموديًا
const maxRight = 1100;        // أقصى تحرك لليمين
const maxLeft = 50;           // أقصى تحرك لليسار

// الحصول على ارتفاع نافذة المتصفح
const windowHeight = window.innerHeight;

// تحديد نقاط التحول في حركة العنصر
const centerStart = windowHeight;          // بداية الجزء الثاني من التمرير
const bottomStart = windowHeight * 2;      // بداية الجزء الثالث من التمرير

// متغير لحفظ آخر قيمة للتحرك الأفقي
let lastTranslateX = 0;

// عند التمرير (Scroll)
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY; // مقدار التمرير العمودي

  // تحديد قيمة التحرك العمودي (Y) بحيث لا تتجاوز الحد الأقصى
  const translateY = Math.min(scrollY, maxTranslationY);

  let translateX; // متغير للتحكم في التحرك الأفقي

  if (scrollY < maxTranslationY) {
    if (scrollY < centerStart) {
      // الجزء الأول: تحرك تدريجيًا إلى اليمين
      const progress = scrollY / centerStart;
      translateX = maxRight * progress;

    } else if (scrollY >= centerStart && scrollY < bottomStart) {
      // الجزء الثاني: تحرك تدريجيًا إلى اليسار
      const progress = (scrollY - centerStart) / windowHeight;
      translateX = maxRight - (maxRight + maxLeft) * progress;

    } else {
      // الجزء الثالث: يرجع تدريجيًا إلى اليمين
      const progress = (scrollY - bottomStart) / windowHeight;
      translateX = -maxLeft + (maxRight + maxLeft) * progress;
    }

    // حفظ آخر قيمة للـ X طالما لسه ما تجاوزنا maxTranslationY
    lastTranslateX = translateX;

  } else {
    // لو عدينا الحد الأقصى، يثبت آخر قيمة للـ X
    translateX = lastTranslateX;
  }

  // تطبيق الحركة على العنصر باستخدام التحول (transform)
  model.style.transform = `translateY(${translateY}px) translateX(${translateX}px)`;
});


VANTA.FOG({
  el: "#learnjfjf",           // العنصر الذي سيتم تطبيق تأثير الضباب عليه
  mouseControls: true,        // تفعيل التحكم بالفأرة
  touchControls: true,        // تفعيل التحكم باللمس
  gyroControls: false,        // إيقاف التحكم بالحركة (للأجهزة الذكية)
  minHeight: 200.00,          // أقل ارتفاع للتأثير
  minWidth: 200.00,           // أقل عرض للتأثير
  highlightColor: 0xff00d1,   // لون التوهج
  midtoneColor: 0x371e26,     // لون منتصف الضباب
  lowlightColor: 0x0,         // لون الظلال
  baseColor: 0xca7d7d         // اللون الأساسي للخلفية
})
