// نحصل على العنصر اللي هنحركه
const model = document.getElementById('model');

// أقصى حد للتحريك العمودي
const maxTranslationY = 2050;

// أقصى تحريك لليمين والشمال
const maxRight = 1100;
const maxLeft = 50;

// ارتفاع الشاشة بالكامل
const windowHeight = window.innerHeight;

// بداية القسم الأوسط والسفلي (للتقسيم أثناء التحريك)
const centerStart = windowHeight;
const bottomStart = windowHeight * 2;

// لحفظ آخر قيمة للترجمة الأفقية X
let lastTranslateX = 0;

// عند التمرير (scroll) يتم تنفيذ الآتي
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY; // قيمة التمرير الحالية

  // ترجمة Y تكون بحد أقصى maxTranslationY
  const translateY = Math.min(scrollY, maxTranslationY);

  let translateX;

  if (scrollY < maxTranslationY) {
    if (scrollY < centerStart) {
      // الجزء الأول - يتحرك لليمين تدريجيًا
      const progress = scrollY / centerStart;
      translateX = maxRight * progress;
    } else if (scrollY >= centerStart && scrollY < bottomStart) {
      // الجزء الثاني - يتحرك لليسار تدريجيًا
      const progress = (scrollY - centerStart) / windowHeight;
      translateX = maxRight - (maxRight + maxLeft) * progress;
    } else {
      // الجزء الثالث - يرجع تاني لليمين تدريجيًا
      const progress = (scrollY - bottomStart) / windowHeight;
      translateX = -maxLeft + (maxRight + maxLeft) * progress;
    }

    // نحفظ آخر قيمة X
    lastTranslateX = translateX;
  } else {
    // بعد الوصول للنهاية، نثبت آخر قيمة X
    translateX = lastTranslateX;
  }

  // نحدث موضع العنصر
  model.style.transform = `translateY(${translateY}px) translateX(${translateX}px)`;
});

// إعداد مؤثر VANTA.FOG للخلفية
VANTA.FOG({
  el: "#learnjfjf",           // العنصر الذي ستُطبق عليه المؤثر
  mouseControls: true,        // التحكم بالماوس
  touchControls: true,        // التحكم باللمس
  gyroControls: false,        // عدم تفعيل الجيروسكوب
  minHeight: 200.00,          // الحد الأدنى للارتفاع
  minWidth: 200.00,           // الحد الأدنى للعرض
  highlightColor: 0xff00d1,   // لون الإضاءة القوية
  midtoneColor: 0x371e26,     // اللون المتوسط
  lowlightColor: 0x000000,    // اللون الداكن
  baseColor: 0xca7d7d         // اللون الأساسي للخلفية
});
