const model = document.getElementById('model');

const maxTranslationY = 2050;
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

let Keyboard = window.SimpleKeyboard.default;

let keyboard = new Keyboard({
  onChange: input => onChange(input),
  onKeyPress: button => onKeyPress(button)
});

/**
 * Update simple-keyboard when input is changed directly
 */
document.querySelector(".input").addEventListener("input", event => {
  keyboard.setInput(event.target.value);
});

console.log(keyboard);

function onChange(input) {
  document.querySelector(".input").value = input;
  console.log("Input changed", input);
}

function onKeyPress(button) {
  console.log("Button pressed", button);

  /**
   * If you want to handle the shift and caps lock buttons
   */
  if (button === "{shift}" || button === "{lock}") handleShift();
}

function handleShift() {
  let currentLayout = keyboard.options.layoutName;
  let shiftToggle = currentLayout === "default" ? "shift" : "default";

  keyboard.setOptions({
    layoutName: shiftToggle
  });
}


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