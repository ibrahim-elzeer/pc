const maxTranslationY = 3000;
const maxRight = 1100;
const maxLeft = 50;

const windowHeight = window.innerHeight;
const centerStart = windowHeight;
const bottomStart = windowHeight * 2;

let lastTranslateX = 0; 

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  const translateY = Math.min(scrollY, maxTranslationY);

  let translateX;

  if (scrollY < maxTranslationY) {
    if (scrollY < centerStart) {
      // الجزء الأول - يمين أكتر
      const progress = scrollY / centerStart;
      translateX = maxRight * progress;
    } else if (scrollY >= centerStart && scrollY < bottomStart) {
      // الجزء الثاني - شمال أقل
      const progress = (scrollY - centerStart) / windowHeight;
      translateX = maxRight - (maxRight + maxLeft) * progress;
    } else {
      // الجزء الثالث - يرجع يمين تدريجيًا
      const progress = (scrollY - bottomStart) / windowHeight;
      translateX = -maxLeft + (maxRight + maxLeft) * progress;
    }
    


    // خزّن آخر قيمة X طالما لسه تحت maxTranslationY
    lastTranslateX = translateX;

  } else {
    // لو عدينا maxTranslationY، خليه يثبت آخر قيمة X
    translateX = lastTranslateX;
  }

  model.style.transform = `translateY(${translateY}px) translateX(${translateX}px)`;
});




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