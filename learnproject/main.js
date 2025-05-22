// popup1
const showPopupBtn1 = document.getElementById('show-popup-btn1');
const popup1= document.getElementById('popup1');
const closeBtn1 = document.getElementById('close-btn1');

showPopupBtn1.addEventListener('click', function() {
  popup1.style.display = 'flex';
 
});

closeBtn1.addEventListener('click', function() {
  popup1.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target === popup1) {
    popup1.style.display = 'none';
  }
});



// popup2
const showPopupBtn2 = document.getElementById('show-popup-btn2');
const popup2 = document.getElementById('popup2');
const closeBtn2 = document.getElementById('close-btn2');

showPopupBtn2.addEventListener('click', function() {
  popup2.style.display = 'flex';

});

closeBtn2.addEventListener('click', function() {
  popup2.style.display = 'none';
  
});

window.addEventListener('click', function(event) {
  if (event.target === popup2) {
    popup2.style.display = 'none';
  }
});





// popup3
const showPopupBtn3 = document.getElementById('show-popup-btn3');
const popup3 = document.getElementById('popup3');
const closeBtn3 = document.getElementById('close-btn3');

showPopupBtn3.addEventListener('click', function() {
  popup3.style.display = 'flex';

});

closeBtn3.addEventListener('click', function() {
  popup3.style.display = 'none';
  
});

window.addEventListener('click', function(event) {
  if (event.target === popup3) {
    popup3.style.display = 'none';
  }
});






// popup4
const showPopupBtn4 = document.getElementById('show-popup-btn4');
const popup4 = document.getElementById('popup4');
const closeBtn4 = document.getElementById('close-btn4');

showPopupBtn4.addEventListener('click', function() {
  popup4.style.display = 'flex';

});

closeBtn4.addEventListener('click', function() {
  popup4.style.display = 'none';
  
});

window.addEventListener('click', function(event) {
  if (event.target === popup4) {
    popup4.style.display = 'none';
  }
});




// popup5
const showPopupBtn5 = document.getElementById('show-popup-btn5');
const popup5 = document.getElementById('popup5');
const closeBtn5 = document.getElementById('close-btn5');

showPopupBtn5.addEventListener('click', function() {
  popup5.style.display = 'flex';

});

closeBtn5.addEventListener('click', function() {
  popup5.style.display = 'none';
  
});

window.addEventListener('click', function(event) {
  if (event.target === popup5) {
    popup5.style.display = 'none';
  }
});



// popup6
const showPopupBtn6 = document.getElementById('show-popup-btn6');
const popup6 = document.getElementById('popup6');
const closeBtn6 = document.getElementById('close-btn6');

showPopupBtn6.addEventListener('click', function() {
  popup6.style.display = 'flex';

});

closeBtn6.addEventListener('click', function() {
  popup6.style.display = 'none';
  
});

window.addEventListener('click', function(event) {
  if (event.target === popup6) {
    popup6.style.display = 'none';
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


VANTA.FOG({
    el: "#learnjfjf",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    highlightColor: 0xff00d1,
    midtoneColor: 0x371e26,
    lowlightColor: 0x0,
    baseColor: 0xca7d7d
})