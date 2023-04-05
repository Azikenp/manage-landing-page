const btn  = document.getElementById("menu-btn");
const nav = document.getElementById("menu");



btn.addEventListener("click", ()=>{
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
nav.classList.toggle('hidden')
})


// if (element.scrollWidth > element.clientWidth) {
//   element.style.overflowX = "scroll";
// }

const slider = document.getElementById("scroll-div");
let isDown = false
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown= true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft
})
slider.addEventListener('mouseleave', () => {
    isDown = false;
})
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
})
slider.addEventListener('mousemove', (e) => {
    if(!isDown){
        return
    }
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2
    slider.scrollLeft = scrollLeft - walk
})
