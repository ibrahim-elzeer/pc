// الحصول على العنصر اللي هيتم تحريكه
const model = document.getElementById('model');

// تحديد أقصى قيمة للتحريك الرأسي
const maxTranslationY = 2050;

// أقصى تحريك أفقي لليمين والشمال
const maxRight = 1100;
const maxLeft = 50;

// حساب ارتفاع نافذة العرض
const windowHeight = window.innerHeight;

// بداية القسم الأوسط (منتصف الشاشة) وبداية القسم السفلي
const centerStart = windowHeight;
const bottomStart = windowHeight * 2;

// متغير لتخزين آخر قيمة X تم الوصول إليها
let lastTranslateX = 0;

// عند التمرير يتم تنفيذ هذا الحدث
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY; // قيمة التمرير العمودي الحالية

  // نحسب translateY بحيث لا يزيد عن maxTranslationY
  const translateY = Math.min(scrollY, maxTranslationY);

  let translateX; // لتحريك العنصر أفقيًا

  if (scrollY < maxTranslationY) {
    if (scrollY < centerStart) {
      // الجزء الأول: يتحرك العنصر لليمين تدريجيًا
      const progress = scrollY / centerStart;
      translateX = maxRight * progress;
    } else if (scrollY >= centerStart && scrollY < bottomStart) {
      // الجزء الثاني: يتحرك العنصر نحو اليسار تدريجيًا
      const progress = (scrollY - centerStart) / windowHeight;
      translateX = maxRight - (maxRight + maxLeft) * progress;
    } else {
      // الجزء الثالث: يرجع تاني لليمين تدريجيًا
      const progress = (scrollY - bottomStart) / windowHeight;
      translateX = -maxLeft + (maxRight + maxLeft) * progress;
    }

    // حفظ آخر قيمة X طالما لسه التمرير تحت الحد المسموح
    lastTranslateX = translateX;

  } else {
    // بعد maxTranslationY، نثبت قيمة X على آخر وضع
    translateX = lastTranslateX;
  }

  // نُطبّق التحريك على العنصر
  model.style.transform = `translateY(${translateY}px) translateX(${translateX}px)`;
});


// إعداد تأثير VANTA.FOG كخلفية متحركة
VANTA.FOG({
  el: "#learnjfjf",         // العنصر الذي سيتم عليه التأثير
  mouseControls: true,      // تفعيل التحكم بالفأرة
  touchControls: true,      // تفعيل التحكم باللمس
  gyroControls: false,      // تعطيل الجيروسكوب
  minHeight: 200.00,        // الحد الأدنى لارتفاع التأثير
  minWidth: 200.00,         // الحد الأدنى لعرض التأثير
  highlightColor: 0xff00d1, // لون الإضاءة البارزة
  midtoneColor: 0x371e26,   // لون الإضاءة المتوسطة
  lowlightColor: 0x0,       // اللون الداكن
  baseColor: 0xca7d7d       // اللون الأساسي للخلفية
});
