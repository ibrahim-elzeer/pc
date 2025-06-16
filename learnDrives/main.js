// جلب العنصر اللي هيتم تحريكه
const model = document.getElementById('model');

// إعدادات أقصى حدود الحركة
const maxTranslationY = 2050; // أقصى مسافة يقدر يتحركها العنصر رأسيًا (من أعلى لأسفل)
const maxRight = 1100;        // أقصى مسافة يتحركها العنصر ناحية اليمين
const maxLeft = 50;           // أقصى مسافة ناحية الشمال

// حساب ارتفاع الشاشة لتقسيم مراحل التمرير
const windowHeight = window.innerHeight;
const centerStart = windowHeight;           // بداية المرحلة التانية (منتصف الصفحة)
const bottomStart = windowHeight * 2;       // بداية المرحلة التالتة (أسفل الصفحة)

// متغير لتخزين آخر قيمة في المحور X
let lastTranslateX = 0; 

// حدث التمرير (scroll)
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY; // قيمة التمرير الحالية

  // نحسب translateY بناءً على التمرير لكن منخليش يتعدى الحد الأقصى
  const translateY = Math.min(scrollY, maxTranslationY);

  let translateX; // متغير لحركة العنصر أفقيًا (يمين / شمال)

  // طالما احنا تحت الحد الأقصى للتحريك
  if (scrollY < maxTranslationY) {

    if (scrollY < centerStart) {
      // المرحلة الأولى: العنصر يتحرك يمين تدريجيًا
      const progress = scrollY / centerStart;
      translateX = maxRight * progress;

    } else if (scrollY >= centerStart && scrollY < bottomStart) {
      // المرحلة التانية: العنصر يتحرك شمال تدريجيًا
      const progress = (scrollY - centerStart) / windowHeight;
      translateX = maxRight - (maxRight + maxLeft) * progress;

    } else {
      // المرحلة التالتة: العنصر يرجع ناحية اليمين تاني
      const progress = (scrollY - bottomStart) / windowHeight;
      translateX = -maxLeft + (maxRight + maxLeft) * progress;
    }

    // نخزن آخر قيمة للموقع الأفقي
    lastTranslateX = translateX;

  } else {
    // لو عدينا الحد، نثبت آخر موضع أفقي وصل له
    translateX = lastTranslateX;
  }

  // نطبق التحريك على العنصر
  model.style.transform = `translateY(${translateY}px) translateX(${translateX}px)`;
});

VANTA.FOG({
  el: "#learnjfjf",            // ID العنصر اللي هيتطبق عليه التأثير
  mouseControls: true,         // التحكم بالمؤشر
  touchControls: true,         // دعم للمس على الموبايل
  gyroControls: false,         // إلغاء التحكم بالجيروسكوب (حركة الموبايل)
  minHeight: 200.00,           // أقل ارتفاع للتأثير
  minWidth: 200.00,            // أقل عرض للتأثير
  highlightColor: 0xff00d1,    // لون الإضاءة
  midtoneColor: 0x371e26,      // اللون الأوسط
  lowlightColor: 0x0,          // لون الظل أو الخلفية الأغمق
  baseColor: 0xca7d7d          // اللون الأساسي للتأثير
});
