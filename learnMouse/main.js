// الحصول على العنصر الذي سيتم تحريكه
const model = document.getElementById('model');

// القيم القصوى للحركة العمودية والأفقية
const maxTranslationY = 2050; // أقصى مقدار للتحرك لأسفل (Y)
const maxRight = 1100;        // أقصى تحرك لليمين (X موجب)
const maxLeft = 50;           // أقصى تحرك لليسار (X سالب)

// الحصول على ارتفاع نافذة العرض (window)
const windowHeight = window.innerHeight;

// تعريف مراحل الحركة بناءً على التمرير
const centerStart = windowHeight;         // بداية المرحلة الثانية
const bottomStart = windowHeight * 2;     // بداية المرحلة الثالثة

// لتخزين آخر قيمة لحركة X عند الوصول للنهاية
let lastTranslateX = 0;

// عند حدوث تمرير (Scroll)
window.addEventListener('scroll', () => {
  // الحصول على مقدار التمرير العمودي الحالي
  const scrollY = window.scrollY;

  // تحديد الموضع الرأسي الجديد (Y)، ولا يزيد عن الحد الأقصى
  const translateY = Math.min(scrollY, maxTranslationY);

  let translateX; // متغير لحساب الموضع الأفقي (X)

  if (scrollY < maxTranslationY) {
    if (scrollY < centerStart) {
      // 🟢 المرحلة الأولى: تحرك لليمين تدريجيًا
      const progress = scrollY / centerStart; // نسبة التمرير
      translateX = maxRight * progress;

    } else if (scrollY >= centerStart && scrollY < bottomStart) {
      // 🟡 المرحلة الثانية: تحرك تدريجيًا إلى اليسار
      const progress = (scrollY - centerStart) / windowHeight;
      translateX = maxRight - (maxRight + maxLeft) * progress;

    } else {
      // 🔵 المرحلة الثالثة: العودة تدريجيًا إلى اليمين
      const progress = (scrollY - bottomStart) / windowHeight;
      translateX = -maxLeft + (maxRight + maxLeft) * progress;
    }

    // تخزين آخر قيمة للـ X طالما لم نتجاوز maxTranslationY
    lastTranslateX = translateX;

  } else {
    // عند تجاوز الحد الأقصى للحركة، نثبت X على آخر قيمة
    translateX = lastTranslateX;
  }

  // تطبيق الحركة على العنصر
  model.style.transform = `translateY(${translateY}px) translateX(${translateX}px)`;
});


// 🎨 تطبيق تأثير ضبابي باستخدام مكتبة VANTA.js
VANTA.FOG({
  el: "#learnjfjf",            // العنصر الذي سيظهر عليه التأثير
  mouseControls: true,         // تفعيل تحكم الفأرة في الخلفية
  touchControls: true,         // تفعيل تحكم اللمس في الخلفية
  gyroControls: false,         // تعطيل التحكم بالحركة (للجوال)
  minHeight: 200.00,           // الحد الأدنى للارتفاع
  minWidth: 200.00,            // الحد الأدنى للعرض
  highlightColor: 0xff00d1,    // لون الإضاءة
  midtoneColor: 0x371e26,      // اللون المتوسط
  lowlightColor: 0x0,          // الظل الداكن
  baseColor: 0xca7d7d          // اللون الأساسي للخلفية
});
