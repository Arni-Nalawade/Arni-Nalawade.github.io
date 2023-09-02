(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
})();

//Slider Button
const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
var slideNumber = 0;

//image slider next button
nextBtn.addEventListener("click",() => {
    slides.forEach((slide) =>{
        slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) =>{
        slideIcon.classList.remove("active");
    });

    slideNumber++;

    if(slideNumber > (numberOfSlides - 1)){
        slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
});

//Image slider Previous Button
prevBtn.addEventListener("click",() => {
    slides.forEach((slide) =>{
        slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) =>{
        slideIcon.classList.remove("active");
    });

    slideNumber--;

    if(slideNumber < 0){
        slideNumber = numberOfSlides-1;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
});

//Image slider Autoplay
var playSlider;

var repeater = () => {
    playSlider = setInterval(function(){
        slides.forEach((slide) =>{
            slide.classList.remove("active");
        });
        slideIcons.forEach((slideIcon) =>{
            slideIcon.classList.remove("active");
        });
    
        slideNumber++;
    
        if(slideNumber > (numberOfSlides - 1)){
            slideNumber = 0;
        }
    
        slides[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");
    }, 4000);
}

repeater();

//Stop autoplay on mouse over
slider.addEventListener("mouseover", () =>{
    clearInterval(playSlider);
});

//Restart autoplay
slider.addEventListener("mouseout", () =>{
    repeater();
});