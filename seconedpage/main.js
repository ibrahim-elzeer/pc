


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
  
  function startCounter(id, start, target, duration) {
    let current = start;  
    let steps = target - start; 
    let intervalTime = (duration * 1000) / steps;

    let counter = document.getElementById(id);

    let interval = setInterval(() => {
      current++;
      counter.textContent = current;

      if (current >= target) {
        clearInterval(interval);
      }
    }, intervalTime);
  }

  startCounter("counter1", 24000, 26000, 1);  // من 5 إلى 10 خلال 5 ثواني
  startCounter("counter2", 22000, 28000, 1); // من 10 إلى 20 خلال 10 ثواني
  startCounter("counter3", 21000, 22000, 1); // من 15 إلى 30 خلال 15 ثانية


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