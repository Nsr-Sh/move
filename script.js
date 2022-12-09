const element = document.querySelector('#cute');
document.addEventListener('keydown', move);
element.addEventListener('click', randmove)

// initial position
let x = 0,
    y = 0;
let xdis, ydis;
// displacement rate
let dis = 20;

// keydown function
function move(e) {
    // console.log(e.key);
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

// get viweport dimension
let w = window.innerWidth,
    h = window.innerHeight;

// click function
function randmove() {

    //generate random posivie or negative number 
    xdis = (Math.random() - Math.random()) * w / 4,
        ydis = (Math.random() - Math.random()) * h / 4;
    element.style.transform = `translate(${xdis}px,${ydis}px)`;
    // save position for keydown event
    x = xdis
    y = ydis
}