const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');

let intervalId = null; // Declare the interval ID variable outside the functions

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

startBtn.addEventListener('click', function () {
    // Check if an interval is already running
    if (!intervalId) {
        intervalId = setInterval(() => {
            document.body.style.backgroundColor = getRandomColor();
        }, 1000);
    }
});

stopBtn.addEventListener('click', function () {
    // Clear the interval and reset the ID
    clearInterval(intervalId);
    intervalId = null;
});




