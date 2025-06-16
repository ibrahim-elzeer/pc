// // Section 2
// let currentSlide2 = 0;
// const slides2 = document.querySelectorAll('#section2 .slide');
// const prev2 = document.getElementById('prev1');
// const next2 = document.getElementById('next1');

// function showSlide2(index) {
//     if (index < 0) {
//         currentSlide2 = slides2.length - 1;
//     } else if (index >= slides2.length) {
//         currentSlide2 = 0;
//     }
//     slides2.forEach((slide, i) => {
//         slide.classList.remove('active');
//         if (i === currentSlide2) {
//             slide.classList.add('active');
//         }
//     });
// }

// prev2.addEventListener('click', () => {
//     currentSlide2--;
//     showSlide2(currentSlide2);
// });

// next2.addEventListener('click', () => {
//     currentSlide2++;
//     showSlide2(currentSlide2);
// });

// showSlide2(currentSlide2);

// Section 4 (Separate Navigation)
// تعريف المتغير اللي هيحتفظ بالرقم الحالي للشرائح
let currentSlide4 = 0;

// جلب كل الشرائح الموجودة داخل القسم رقم 4
const slides3 = document.querySelectorAll('#scetion4 .slide');

// جلب زر السابق (prev) وزر التالي (next)
const prev3 = document.getElementById('prev2');
const next3 = document.getElementById('next2');

// دالة لعرض الشريحة حسب الرقم المطلوب
function showSlide3(index) {
    // لو الرقم أصغر من 0، ارجع لآخر شريحة
    if (index < 0) {
        currentSlide4 = slides3.length - 1;
    } 
    // لو الرقم أكبر من أو يساوي عدد الشرائح، ارجع لأول شريحة
    else if (index >= slides3.length) {
        currentSlide4 = 0;
    }

    // إزالة الكلاس 'active' من كل الشرائح
    slides3.forEach((slide, i) => {
        slide.classList.remove('active');

        // إضافة الكلاس 'active' للشريحة الحالية فقط
        if (i === currentSlide4) {
            slide.classList.add('active');
        }
    });
}

// عند الضغط على زر السابق، يتم عرض الشريحة السابقة
prev3.addEventListener('click', () => {
    currentSlide4--;
    showSlide3(currentSlide4);
});

// عند الضغط على زر التالي، يتم عرض الشريحة التالية
next3.addEventListener('click', () => {
    currentSlide4++;
    showSlide3(currentSlide4);
});

// عرض الشريحة الأولى عند تحميل الصفحة
showSlide3(currentSlide4);


// Section 6 (Separate Navigation)
let currentSlide6 = 0;
const slides4 = document.querySelectorAll('#scetion6 .slide');
const prev4 = document.getElementById('prev3');
const next4 = document.getElementById('next3');

function showSlide4(index) {
    if (index < 0) {
        currentSlide6 = slides4.length - 1;
    } else if (index >= slides4.length) {
        currentSlide6 = 0;
    }
    slides4.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentSlide6) {
            slide.classList.add('active');
        }
    });
}

prev4.addEventListener('click', () => {
    currentSlide6--;
    showSlide4(currentSlide6);
});

next4.addEventListener('click', () => {
    currentSlide6++;
    showSlide4(currentSlide6);
});

showSlide4(currentSlide6);


// Section 8 (Separate Navigation)
let currentSlide8 = 0;
const slides5 = document.querySelectorAll('#scetion8 .slide');
const prev5 = document.getElementById('prev4');
const next5 = document.getElementById('next4');

function showSlide5(index) {
    if (index < 0) {
        currentSlide8 = slides5.length - 1;
    } else if (index >= slides5.length) {
        currentSlide8 = 0;
    }
    slides5.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentSlide8) {
            slide.classList.add('active');
        }
    });
}

prev5.addEventListener('click', () => {
    currentSlide8--;
    showSlide5(currentSlide8);
});

next5.addEventListener('click', () => {
    currentSlide8++;
    showSlide5(currentSlide8);
});

showSlide5(currentSlide8);

const showPopupBtn = document.getElementById('show-popup-btn');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('close-btn');
const video1 = document.getElementById('video1');

showPopupBtn.addEventListener('click', function() {
  popup.style.display = 'flex';
  video1.play(); 
  video1.currentTime = 0; 
});

closeBtn.addEventListener('click', function() {
  popup.style.display = 'none';
    video1.pause(); 

});


const showPopupBtn2 = document.getElementById('show-popup-btn2');
const popup2 = document.getElementById('popup2');
const closeBtn2 = document.getElementById('close-btn2');
const video2 = document.getElementById('video2');

showPopupBtn2.addEventListener('click', function() {
  popup2.style.display = 'flex';
  video2.currentTime = 0;
  video2.play();
});

closeBtn2.addEventListener('click', function() {
  popup2.style.display = 'none';
  video2.pause();
});

window.addEventListener('click', function(event) {
  if (event.target === popup2) {
    popup2.style.display = 'none';
    video2.pause();
  }
});




const showPopupBtn3 = document.getElementById('show-popup-btn3');
const popup3 = document.getElementById('popup3');
const closeBtn3 = document.getElementById('close-btn3');
const video3 = document.getElementById('video3');

showPopupBtn3.addEventListener('click', function() {
  popup3.style.display = 'flex';
  video3.play(); 
  video3.currentTime = 0;
});

closeBtn3.addEventListener('click', function() {
  popup3.style.display = 'none';
    video3.pause(); 

});

window.addEventListener('click', function(event) {
  if (event.target === popup3) {
    popup3.style.display = 'none';
  }
});




const showPopupBtn4 = document.getElementById('show-popup-btn4');
const popup4 = document.getElementById('popup4');
const closeBtn4 = document.getElementById('close-btn4');
const video4 = document.getElementById('video4');

showPopupBtn4.addEventListener('click', function() {
  popup4.style.display = 'flex';
  video4.play(); 
  video4.currentTime = 0; 
});

closeBtn4.addEventListener('click', function() {
  popup4.style.display = 'none';
    video4.pause(); 

});

window.addEventListener('click', function(event) {
  if (event.target === popup3) {
    popup4.style.display = 'none';
  }
});




const sidebar = document.getElementById("sidebar");
const main = document.getElementById("main");
const header = document.getElementById("header");
const menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("hidden");
  main.classList.toggle("full");
  header.classList.toggle("full");
});


function toggleMenu2() {
  const menu = document.getElementById("userMenu2");

  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
    menu.classList.add("hide");
  } else {
    menu.classList.remove("hide");
    menu.classList.add("show");
  }
}

document.addEventListener("click", function (e) {
  const menu = document.getElementById("userMenu2");
  const icon = document.querySelector(".fa-user");

  if (!menu.contains(e.target) && !icon.contains(e.target)) {
    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
      menu.classList.add("hide");
    }
  }
});




const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    console.log(entry)
    if (entry.isIntersecting) {
      // إضافة الفئة المناسبة بناءً على العنصر
      if (entry.target.classList.contains('hidden1')) {
        entry.target.classList.add('active1');
      } else if (entry.target.classList.contains('hidden2')) {
        entry.target.classList.add('active2');
      } else if (entry.target.classList.contains('hidden3')) {
        entry.target.classList.add('active3');
      }else if (entry.target.classList.contains('hidden4')) {
        entry.target.classList.add('active4');
      }else if (entry.target.classList.contains('hidden5')) {
        entry.target.classList.add('active5');
      }else if (entry.target.classList.contains('hidden6')) {
        entry.target.classList.add('active6');
      }
    } else {
      // إزالة الفئة المناسبة عند خروج العنصر من النافذة
      if (entry.target.classList.contains('hidden1')) {
        entry.target.classList.remove('active1');
      } else if (entry.target.classList.contains('hidden2')) {
        entry.target.classList.remove('active2');
      } else if (entry.target.classList.contains('hidden3')) {
        entry.target.classList.remove('active3');
      }else if (entry.target.classList.contains('hidden4')) {
        entry.target.classList.remove('active4');
      }else if (entry.target.classList.contains('hidden5')) {
        entry.target.classList.remove('active5');
      }else if (entry.target.classList.contains('hidden6')) {
        entry.target.classList.remove('active6');
      }
    }
  });
}, {
  threshold: 0.5 // عند التداخل 50% مع النافذة
});

// مراقبة العناصر
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




// const chatbot = document.getElementById("chatbot");
//   const chatToggle = document.getElementById("chat-toggle");
//   const messages = document.getElementById("chat-messages");
//   const userInput = document.getElementById("user-input");

//  chatToggle.onclick = () => {
//     // تغيير حالة العرض بناءً على الفئة الحالية
//     if (chatbot.classList.contains("hide")) {
//         chatbot.classList.remove("hide"); // إزالة "hide"
//         chatbot.classList.add("show"); // إضافة "show"
//     } else {
//         chatbot.classList.remove("show"); // إزالة "show"
//         chatbot.classList.add("hide"); // إضافة "hide"
//     }
// };

//   function sendMessage() {
//     const msg = userInput.value.trim();
//     if (!msg) return;

//     addMessage("user", msg);
//     userInput.value = "";

//     setTimeout(() => {
//       const reply = getBotReply(msg);
//       addMessage("bot", reply);
//     }, 1500);
//   }
  
  

//   function addMessage(sender, text) {
//     const div = document.createElement("div");
//     div.className = `message ${sender}`;
//     div.innerText = text;
//     messages.appendChild(div);
//     messages.scrollTop = messages.scrollHeight;
//   }

// function getBotReply(input) {
//   const text = input.toLowerCase();
//   if (text.includes("ازيك") || text.includes("عامل ايه")|| text.includes("عامل اي")) {
//     return "أنا تمام! إنت عامل إيه؟ 😊";
//   }else if (text.includes("الحمد لله")) {
//     return "يارب دايما 🤍";
//   }else if (text.includes("عايز اعرف اكتر عن المنصة")) {
//     return "المنصة هي منصة تعليمية عبر الإنترنت تهدف إلى تعليم المستخدمين مواضيع مختلفة في تقنية الكمبيوتر. تغطي المنصة مجموعة من المواضيع الأساسية مثل اللوحة الأم (Motherboard)، أجهزة الإدخال/الإخراج (Input/Output Devices)، و الكاميرا، وذلك من خلال دروس تعليمية متخصصة.";
//   } else if (text.includes("شكرا")) {
//     return "العفو! تحت أمرك في أي وقت 🙌";
//   } else {
//     return "ممكن توضح أكتر؟ لسه بتعلم 😅";
//   }
// }
if (!localStorage.getItem('dontShohwIngtro')) {
  const intro = introJs();
  intro.setOptions({
    steps: [
      {
 intro: `
Welcome! Let's explore the sidebar.
  <br><br>
  <label>
    <input type="checkbox" id="dontShowAgainCheckbox">
    <span style="font-size: 13px;">Don't show this again</span>
  </label>
`      },
      {
        element: document.querySelector('#fec1'),
        intro: "This leads to MotherBoard section."
      },
      {
        element: document.querySelector('#fec2'),
        intro: "Input Devices section."
      },
      {
        element: document.querySelector('#fec3'),
        intro: "Examples of input devices."
      },
      {
        element: document.querySelector('#fec4'),
        intro: "Output devices section."
      },
      {
        element: document.querySelector('#fec5'),
        intro: "Examples of output devices."
      },
      {
        element: document.querySelector('#fec6'),
        intro: "Camera section."
      },
      {
        element: document.querySelector('#fec8'),
        intro: "Examples of the camera."
      },
      {
        element: document.querySelector('#fec9'),
        intro: "Go to final page."
      },
            {
        element: document.querySelector('#menuBtn'),
        intro: "show and hidden sidebar."
      },
   
    ]
  });

  intro.oncomplete(function() {
    if (document.getElementById("dontShowAgainCheckbox")?.checked) {
      localStorage.setItem("dontShohwIngtro", "true");
    }
  });

  intro.onexit(function() {
    if (document.getElementById("dontShowAgainCheckbox")?.checked) {
      localStorage.setItem("dontShohwIngtro", "true");
    }
  });

  intro.start();
}


VANTA.FOG({
    el: "#vanta-bgd",
    mouseControls:false,
    touchControls: false,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    highlightColor: 0x606ff,
    midtoneColor: 0x522f2a,
    lowlightColor: 0x5d5196,
    baseColor: 0xbe7979
})
