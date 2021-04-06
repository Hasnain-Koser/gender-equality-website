
var slides = document.getElementsByClassName("image");
console.log(slides[1])
var slide_num = 0;

function switchslide() {
    for(i=0; i<slides.length; i++) {
        if (i != slide_num) {
            slides[i].style.width = "0%";
        }
    }
    console.log(slides[slide_num])
    console.log(slide_num)
    slides[slide_num].style.width = "100%";
    if (slide_num === 2) {
        slide_num = 0;
    }
    else {
        slide_num += 1;
    }
}

window.onload = switchslide;

setInterval(switchslide, 10000)