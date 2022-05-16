const carousel = () => {
    const prevArrow = document.querySelector('.arrow-left');
    const nextArrow = document.querySelector('.arrow-right');
    const slide = document.querySelectorAll('.col-sm-6');


    let currentSlide = 0;


    if (screen.width < 992) {
        slide[1].classList.remove('col-sm-6--active');
        slide[2].classList.remove('col-sm-6--active');



        slide.forEach((e) => {
            e.style.width = 100 + '%';
            e.style.textAlign = 'center';

            if (e.classList.contains('col-sm-6--active')) {
                e.style.display = "block";
            } else {
                e.style.display = "none";

            }
        });

        prevArrow.addEventListener('click', (event) => {
            event.preventDefault();
            slide[currentSlide].classList.remove('col-sm-6--active');
            slide[currentSlide].style.display = "none";


            if (currentSlide === 0) {
                currentSlide = slide.length;
            }

            currentSlide--;

            slide[currentSlide].classList.add('col-sm-6--active');
            slide[currentSlide].style.display = "block";

        });

        nextArrow.addEventListener('click', () => {

            slide[currentSlide].classList.remove('col-sm-6--active');
            slide[currentSlide].style.display = "none";

            currentSlide++;

            if (currentSlide === slide.length) {
                currentSlide = 0;
            }

            slide[currentSlide].classList.add('col-sm-6--active');
            slide[currentSlide].style.display = "block";

        });
    }


    slide.forEach((e) => {
        if (e.classList.contains('col-sm-6--active')) {
            e.style.display = "block";
        } else {
            e.style.display = "none";

        }

        prevArrow.addEventListener('click', () => {

            if (screen.width >= 992) {
                e.classList.toggle('col-sm-6--active');
            }



            if (e.classList.contains('col-sm-6--active')) {
                e.style.display = "block";
            } else {
                e.style.display = "none";

            }
        });


        nextArrow.addEventListener('click', () => {

            if (screen.width >= 992) {
                e.classList.toggle('col-sm-6--active');
            }

            if (e.classList.contains('col-sm-6--active')) {
                e.style.display = "block";
            } else {
                e.style.display = "none";

            }
        });

    });
};

export default carousel;