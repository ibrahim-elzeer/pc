// جلب كل العناصر اللي عليها الكلاس 'item'
const items = document.querySelectorAll('.item');
let currentIndex = 0; // بداية العرض من أول عنصر

// المدة اللي كل عنصر هيظهر فيها (بالملي ثانية)
const durations = [
    2000, // Student One
    2000, // Student Two
    2000, // Student Three
    2000, // Student Four
    2000, // Doctor
    2000  // Teaching
];

// دالة لعرض العنصر التالي
function showNextItem() {
    // إخفاء كل العناصر ووقف الصوت (لو فيه)
    items.forEach(item => {
        item.style.opacity = 0; // إخفاء العنصر
        const audio = item.querySelector('audio'); // جلب عنصر الصوت داخل العنصر
        if (audio) {
            audio.pause();           // إيقاف التشغيل
            audio.currentTime = 0;   // إعادة الصوت للبداية
        }
    });

    const currentItem = items[currentIndex]; // العنصر الحالي اللي هيتعرض
    currentItem.style.opacity = 1;           // إظهاره

    const audio = currentItem.querySelector('audio');
    if (audio) {
        audio.play(); // تشغيل الصوت (لو موجود)
    }

    // بعد انتهاء مدة العنصر الحالي
    setTimeout(() => {
        currentItem.style.opacity = 0; // إخفاء العنصر
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }

        currentIndex++; // الانتقال للعنصر اللي بعده

        if (currentIndex < items.length) {
            // بعد نصف ثانية، نعرض العنصر اللي بعده
            setTimeout(showNextItem, 500);
        } else {
            // بعد عرض كل العناصر، يتم تحويل المستخدم لصفحة جديدة
            window.location.href = "../webInter/index.html";
        }
    }, durations[currentIndex]); // نستخدم المدة المحددة لكل عنصر
}

// بدء العرض التلقائي
showNextItem();

// تطبيق تأثير VANTA.NET (خلفية متحركة شبكية)
VANTA.NET({
    el: "#back",           // العنصر اللي هيتطبق عليه التأثير
    mouseControls: true,   // تمكين التحكم بالماوس
    touchControls: true,   // تمكين التحكم باللمس
    gyroControls: false,   // تعطيل التحكم بالجيروسكوب
    minHeight: 200.00,     // الحد الأدنى للارتفاع
    minWidth: 200.00       // الحد الأدنى للعرض
});
