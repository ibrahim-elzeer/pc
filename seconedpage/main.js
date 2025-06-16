// Toggle القائمة المنسدلة عند الضغط على أيقونة المستخدم
function toggleMenu() {
  const menu = document.getElementById("userMenu");

  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
    menu.classList.add("hide");
  } else {
    menu.classList.remove("hide");
    menu.classList.add("show");
  }
}

// غلق القائمة لو ضغطت خارجها
document.addEventListener("click", function (e) {
  const menu = document.getElementById("userMenu");
  const icon = document.querySelector(".fa-user");

  if (!menu.contains(e.target) && !icon.contains(e.target)) {
    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
      menu.classList.add("hide");
    }
  }
});


// دالة تشغيل العداد المتحرك
function startCounter(id, start, target, duration) {
  let current = start; // البداية
  let steps = target - start; // عدد القيم
  let intervalTime = (duration * 1000) / steps; // الوقت بين كل زيادة

  let counter = document.getElementById(id);

  let interval = setInterval(() => {
    current++;
    counter.textContent = current; // عرض الرقم الحالي

    if (current >= target) {
      clearInterval(interval); // إيقاف العداد عند الوصول للنهاية
    }
  }, intervalTime);
}

// تشغيل العدادات
startCounter("counter1", 24000, 26000, 1);
startCounter("counter2", 22000, 28000, 1);
startCounter("counter3", 21000, 22000, 1);


// إنشاء المراقب اللي بيراقب دخول العناصر للشاشة
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // لما العنصر يكون ظاهر في الشاشة بنسبة 50% أو أكثر
    if (entry.isIntersecting) {
      if (entry.target.classList.contains('hidden1')) {
        entry.target.classList.add('active1');
      } else if (entry.target.classList.contains('hidden2')) {
        entry.target.classList.add('active2');
      } else if (entry.target.classList.contains('hidden3')) {
        entry.target.classList.add('active3');
      } else if (entry.target.classList.contains('hidden4')) {
        entry.target.classList.add('active4');
      } else if (entry.target.classList.contains('hidden5')) {
        entry.target.classList.add('active5');
      } else if (entry.target.classList.contains('hidden6')) {
        entry.target.classList.add('active6');
      }
    } else {
      // لو خرج من الشاشة، نشيل التأثير
      if (entry.target.classList.contains('hidden1')) {
        entry.target.classList.remove('active1');
      } else if (entry.target.classList.contains('hidden2')) {
        entry.target.classList.remove('active2');
      } else if (entry.target.classList.contains('hidden3')) {
        entry.target.classList.remove('active3');
      } else if (entry.target.classList.contains('hidden4')) {
        entry.target.classList.remove('active4');
      } else if (entry.target.classList.contains('hidden5')) {
        entry.target.classList.remove('active5');
      } else if (entry.target.classList.contains('hidden6')) {
        entry.target.classList.remove('active6');
      }
    }
  });
}, {
  threshold: 0.5 // العنصر لازم يكون ظاهر 50% عشان يتفاعل
});

// مراقبة العناصر المخفية وتحريكها عند الدخول للشاشة
const hiddenElements1 = document.querySelectorAll('.hidden1');
hiddenElements1.forEach((el) => observer.observe(el));

const hiddenElements2 = document.querySelectorAll('.hidden2');
hiddenElements2.forEach((el) => observer.observe(el));

const hiddenElements3 = document.querySelectorAll('.hidden3');
hiddenElements3.forEach((el) => observer.observe(el));

const hiddenElements4 = document.querySelectorAll('.hidden4');
hiddenElements4.forEach((el) => observer.observe(el));

const hiddenElements5 = document.querySelectorAll('.hidden5');
hiddenElements5.forEach((el) => observer.observe(el));

const hiddenElements6 = document.querySelectorAll('.hidden6');
hiddenElements6.forEach((el) => observer.observe(el));
