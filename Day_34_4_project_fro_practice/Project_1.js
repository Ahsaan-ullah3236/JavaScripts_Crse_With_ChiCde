
const greenBtn = document.querySelector('#green');
const greyBtn = document.querySelector('#grey');
const blackBtn = document.querySelector('#black');
const yellowBtn = document.querySelector('#yellow');
// const buttons = document.querySelector('#buttons'); 

const buttons = document.querySelector('#buttons'); 
const buttonConfigs = [
    { id: 'green', color: 'green', delay: 1000 },
    { id: 'grey', color: 'grey', delay: 2000 },
    { id: 'black', color: 'black', delay: 1000 },
    { id: 'yellow', color: 'yellow', delay: 1000 },
];

buttonConfigs.forEach(config => {
    const button = document.querySelector(`#${config.id}`);
    button.addEventListener('click', function () {
        console.log(`${config.color} Btn is clicked`);
        setTimeout(() => {
            buttons.style.backgroundColor = config.color;
        }, config.delay);
    });
}); 


// This is For the GreenBtn
greenBtn.addEventListener('click', function () {
    console.log("Green Btn is clicked");
    setTimeout(() => {
        buttons.style.backgroundColor = "green";
    }, 1000);
});

// This is For the GreyBtn
greyBtn.addEventListener('click', function () {
    console.log("Grey Btn is clicked");
    setTimeout(() => {
        buttons.style.backgroundColor = "grey";
    }, 2000);
});

// This is For the BlackBtn
blackBtn.addEventListener('click', function () {
    console.log("Black Btn is clicked");
    setTimeout(() => {
        buttons.style.backgroundColor = "black";
    }, 1000);
});

// This is For the YellowBtn
yellowBtn.addEventListener('click', function () {
    console.log("Yellow Btn is clicked");
    setTimeout(() => {
        buttons.style.backgroundColor = "yellow";
    }, 1000);
});
