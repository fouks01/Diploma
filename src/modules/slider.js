const slider = () => {
    const sliderBlock = document.querySelector('.top-slider');
    const slides = sliderBlock.querySelectorAll('.item');
    const timerInterval = 3000;

    const sliderTable = document.querySelectorAll('.table');

    let currentSlide = 0;
    let interval;

    sliderTable.forEach((e) => {
        e.style.opacity = 1;
        e.style.visibility = 'visible';
    });


    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
        elems[index].style.display = "none";
    };

    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass);
        elems[index].style.display = "block";
    };


    const autoSlide = () => {
        prevSlide(slides, currentSlide, 'item-active');

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        };

        nextSlide(slides, currentSlide, 'item-active');
    };

    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault();

        prevSlide(slides, currentSlide, 'item-active');

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        };

        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        nextSlide(slides, currentSlide, 'item-active');
    });

    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches('.item')) {
            stopSlide(timerInterval);
        }
    }, true);

    sliderBlock.addEventListener('mouseleave', (e) => {
        if (e.target.matches('.item')) {
            startSlide(timerInterval);
        }
    }, true);

    startSlide(timerInterval);
};

export default slider;