const items = document.querySelectorAll('.item');
let currentIndex = 0;

const durations = [
    11000, // Student One
    9000, // Student Two
    10000,  // Student Three
    14000,  // Student Four
    15700,  // Doctor
    11000   // Teaching
];

function showNextItem() {
    items.forEach(item => {
        item.style.opacity = 0;
        const audio = item.querySelector('audio');
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }
    });

    const currentItem = items[currentIndex];
    currentItem.style.opacity = 1;

    const audio = currentItem.querySelector('audio');
    if (audio) {
        audio.play();
    }

    setTimeout(() => {
        currentItem.style.opacity = 0;
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }

        currentIndex++;

        if (currentIndex < items.length) {
            setTimeout(showNextItem, 500); 
        } else {
            window.location.href = "../webInter/index.html";
        }
    }, durations[currentIndex]);
}

showNextItem();

VANTA.NET({
    el: "#back",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00
});
