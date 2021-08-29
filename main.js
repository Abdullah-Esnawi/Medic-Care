
let clickDark = document.querySelectorAll('header ul li a'),
    landing = document.querySelector('.landing'),
    about = document.querySelector('.about'),
    timeline = document.querySelector('.timeline');

clickDark.forEach((el) => {
    el.onclick = function () {
        clickDark.forEach((el) => {
            el.classList.remove('active')
        })
        this.classList.add('active');
    }
})

console.log(window.scrollY)
window.addEventListener('scroll', () => {
    const scrollable = document.documentElement.scrollHeight - this.innerHeight;
    const scrolled = window.scrollY;
    if(scrolled === scrollable) {
        console.log('hello scroll')
    }
})

// ############################

let animatedLeftEl = document.querySelector('header button.left');
let animatedRightEl = document.querySelector('header button.right');
let animatedLogo = document.querySelector('.logo')
window.onload = () => {
    animatedLeft(animatedLeftEl);
    animatedRight(animatedRightEl);
    animatedTop(animatedLogo)
}
function animatedLeft(a) {
    a.classList.add('animated-left')
    
}
function animatedTop(a) {
    a.classList.add('animated-top')
}
function animatedRight(a) {
    a.classList.add('animated-right')
    
}

// ############################


let slideimg = ["img/slider/slider1.jpg","img/slider/slider2.jpg","img/slider/slider3.jpg"];
let i = 0;
let slideshow = () => {
    document.slideshow.src = slideimg[i];
    document.src = slideimg[i];
    if (i < slideimg.length - 1) {
        i++;
    } else {
        i == 0;
    }
    setTimeout("slideshow()", 2000);
}
slideshow();




let word = document.getElementById('word-change');
let wordList = ["Days", "lives", "health"];
for (let i =0; i < wordList.length; i++) {
    setTimeout(()=> {word.textContent = wordList[i]},1000*(i+1))
}



let myNav = document.querySelector('#nav-media')
let myToggle = document.querySelector('.bars-icon');
let myToggleOne = document.querySelector('.bars-icon .toggle-one');
let myToggleTwo = document.querySelector('.bars-icon .toggle-two');

myToggle.onclick = () => {
    if(myToggleOne.classList.item(3) == 'hidden'){
        myToggleOne.classList.remove('hidden');
        myToggleTwo.classList.add('hidden');
        myNav.classList.remove('nav-media');
    } else {
        myToggleTwo.classList.remove('hidden');
        myToggleOne.classList.add('hidden');
        myNav.classList.add('nav-media');
    }
}

let myContainerSlider = document.querySelector('.container-slider');
let myArrowNavRight = document.querySelector('.container .icon-right');
let myArrowNavLeft = document.querySelector('.container .icon-left');
let mySlider = document.querySelectorAll('.container-slider .slide-hide');




mySlider.forEach((el) => {
    myArrowNavLeft.onclick = function () {
        mySlider.forEach((el) => {
            el.classList.remove('slider-show')
        })
    myContainerSlider.scrollLeft = -100;
    }

    myArrowNavRight.onclick = function () {
        mySlider.forEach((el) => {
            el.classList.remove('slider-show')
        })
    myContainerSlider.scrollLeft = 100;
    this.classList.add('slider-show');
    }
})
let sliderImages = Array.from(mySlider);
let slidesCount = sliderImages.length;
let currentSlide = 1;
myArrowNavLeft.onclick = prevSlide ;
myArrowNavRight.onclick = nextSlide;

theChecker();

function nextSlide () {
    if(myArrowNavRight.classList.contains('disabled')) {
        return false;
    } else {
        myContainerSlider.scrollLeft = (500*currentSlide);
        currentSlide++;
        theChecker();
    }
}
function prevSlide () {
    if (myArrowNavLeft.classList.contains('disabled')) {
        return false;
    } else {
        currentSlide--;
        theChecker();
        myContainerSlider.scrollLeft -= 500;
}
}

function theChecker() {
    removeAllActive();

    sliderImages[currentSlide - 1].classList.add('slider-show');


    if(currentSlide === 1) {
        myArrowNavLeft.classList.add('disabled');
    } else {
        myArrowNavLeft.classList.remove('disabled')
    }

    if(currentSlide === slidesCount) {
        myArrowNavRight.classList.add('disabled');
    } else {
        myArrowNavRight.classList.remove('disabled')
    }
}
function removeAllActive(){
    sliderImages.forEach( img => {
        img.classList.remove('slider-show');
    });
}

