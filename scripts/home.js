const slides = document.querySelectorAll('[data-js="slide__item"]')
const nextButton = document.querySelector('[data-js="slide__button--next"]')
const prevButton = document.querySelector('[data-js="slide__button--prev"]')

const lastSlideIndex = slides.length - 1
let currentSlideIndex = 0

const manipulateSlidesClasses = () => {
    slides.forEach(slide => {
        slide.classList.remove('slide__item--visible')
    })

    slides[currentSlideIndex].classList.add('slide__item--visible')
}

nextButton.addEventListener('click', () => {
    const correctSlideIndex = currentSlideIndex === lastSlideIndex
        ? currentSlideIndex = 0
        : ++currentSlideIndex

    manipulateSlidesClasses(correctSlideIndex)

    slides.forEach(slide => {
        slide.classList.remove('slide__item--visible')
    })

    slides[currentSlideIndex].classList.add('slide__item--visible')
})

prevButton.addEventListener('click', () => {
const correctSlideIndex = currentSlideIndex === 0 
    ? currentSlideIndex = lastSlideIndex 
    : --currentSlideIndex

   manipulateSlidesClasses(correctSlideIndex)
})

var btn = document.querySelector("#back-to-top");

btn.addEventListener("click", function() {
    window.scrollTo(0, 0);
})
