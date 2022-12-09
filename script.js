// select elements
const element = document.querySelector('#cute');
const btn = document.querySelector('input')

// initial position 
let x = 0,
    y = 0;
let xdis, ydis;

// displacement rate for keydown event
let dis = 20;

// get viweport dimension for click event
let w = window.innerWidth,
    h = window.innerHeight;

// -------------------------------------
// events:
document.addEventListener('keydown', move);
element.addEventListener('click', randmove);
btn.addEventListener('click', comeback);

// function for keydown event
function move(e) {
    console.log('keydown');
    console.log(x, y);
    if (e.key == 'ArrowRight') {
        x += dis;
        element.style.transform = `translate(${x}px,${y}px)`;

    } else if (e.key == 'ArrowLeft') {
        x -= dis;
        element.style.transform = `translate(${x}px,${y}px)`;

    } else if (e.key == 'ArrowUp') {
        y -= dis;
        element.style.transform = `translate(${x}px,${y}px)`;

    } else if (e.key == 'ArrowDown') {
        y += dis;
        element.style.transform = `translate(${x}px,${y}px)`;
    }

}

// ----------

// function for click event
function randmove() {

    //generate random posivie or negative number 
    xdis = (Math.random() - Math.random()) * w / 3,
        ydis = (Math.random() - Math.random()) * h / 3;
    element.style.transform = `translate(${xdis}px,${ydis}px)`;
    // save position for keydown event
    x = xdis;
    y = ydis;
}

// ------------
// function for click(btn) (come back to viewport) 
function comeback() {
    // centering element
    let xmid = w / 2 - element.clientWidth / 2;
    let ymid = h / 2 - element.clientHeight / 2;
    element.style.transform = `translate(${xmid}px,${ymid}px)`;
    x = xmid;
    y = ymid;
}