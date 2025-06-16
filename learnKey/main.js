// جلب العنصر اللي هيتم تحريكه عند التمرير
const model = document.getElementById('model');

// إعدادات أقصى حدود للحركة
const maxTranslationY = 2050;     // أقصى تحرك في الاتجاه الرأسي (من أعلى لأسفل)
const maxRight = 1100;            // أقصى تحرك لليمين
const maxLeft = 50;               // أقصى تحرك للشمال

// حساب مراحل التمرير بناءً على ارتفاع الشاشة
const windowHeight = window.innerHeight;
const centerStart = windowHeight;           // بداية المرحلة الثانية من التمرير
const bottomStart = windowHeight * 2;       // بداية المرحلة الثالثة من التمرير

let lastTranslateX = 0; // لتخزين آخر قيمة X لو عدى المستخدم أقصى حد

// عند التمرير يتم تنفيذ الكود التالي
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY; // مقدار التمرير الحالي

  // تحديد التحريك الرأسي مع منع تجاوزه للحد الأقصى
  const translateY = Math.min(scrollY, maxTranslationY);

  let translateX;

  if (scrollY < maxTranslationY) {
    if (scrollY < centerStart) {
      // الجزء الأول: تحرك لليمين بشكل تدريجي
      const progress = scrollY / centerStart;
      translateX = maxRight * progress;

    } else if (scrollY >= centerStart && scrollY < bottomStart) {
      // الجزء الثاني: يرجع تدريجيًا للشمال
      const progress = (scrollY - centerStart) / windowHeight;
      translateX = maxRight - (maxRight + maxLeft) * progress;

    } else {
      // الجزء الثالث: يرجع تاني لليمين تدريجيًا
      const progress = (scrollY - bottomStart) / windowHeight;
      translateX = -maxLeft + (maxRight + maxLeft) * progress;
    }

    // حفظ آخر قيمة X طول ما احنا تحت الحد
    lastTranslateX = translateX;

  } else {
    // لو المستخدم عدّى أقصى حد في Y، بنثبت قيمة X
    translateX = lastTranslateX;
  }

  // تحريك العنصر باستخدام CSS Transform
  model.style.transform = `translateY(${translateY}px) translateX(${translateX}px)`;
});


/* =====================================================
   لوحة مفاتيح وهمية باستخدام مكتبة simple-keyboard
   ===================================================== */

// تعريف الكيبورد من مكتبة simple-keyboard
let Keyboard = window.SimpleKeyboard.default;

// إنشاء الكيبورد وربطه بالأحداث
let keyboard = new Keyboard({
  onChange: input => onChange(input),       // لما المستخدم يكتب
  onKeyPress: button => onKeyPress(button)  // لما المستخدم يضغط على زر
});

// عند الكتابة في input مباشرةً يتم تحديث الكيبورد
document.querySelector(".input").addEventListener("input", event => {
  keyboard.setInput(event.target.value);
});

// دالة تغيير النص في input
function onChange(input) {
  document.querySelector(".input").value = input;
  console.log("Input changed", input);
}

// دالة عند الضغط على زر في الكيبورد
function onKeyPress(button) {
  console.log("Button pressed", button);

  // لو ضغط على زر شيفت أو كابس لوك نغير الوضع
  if (button === "{shift}" || button === "{lock}") handleShift();
}

// تبديل بين layout العادي والـ shift
function handleShift() {
  let currentLayout = keyboard.options.layoutName;
  let shiftToggle = currentLayout === "default" ? "shift" : "default";

  keyboard.setOptions({
    layoutName: shiftToggle
  });
}


/* ==============================
   تأثير الخلفية باستخدام VANTA
   ============================== */
VANTA.FOG({
  el: "#learnjfjf",           // العنصر اللي هيظهر فيه التأثير
  mouseControls: true,        // التحكم بالفأرة
  touchControls: true,        // دعم اللمس للموبايل
  gyroControls: false,        // إلغاء التحكم بالجيروسكوب
  minHeight: 200.00,          // الحد الأدنى للارتفاع
  minWidth: 200.00,           // الحد الأدنى للعرض
  highlightColor: 0xff00d1,   // لون الإضاءة
  midtoneColor: 0x371e26,     // لون متوسط
  lowlightColor: 0x0,         // لون الخلفية الداكن
  baseColor: 0xca7d7d         // اللون الأساسي
});
