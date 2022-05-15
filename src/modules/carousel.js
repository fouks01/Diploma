const carousel = () => {
    const prevArrow = document.querySelector('.arrow-left');
    const nextArrow = document.querySelector('.arrow-right');
    const slide = document.querySelectorAll('.col-sm-6');


    slide.forEach((e) => {
        if (e.classList.contains('col-sm-6--active')) {
            e.style.display = "block";
        } else {
            e.style.display = "none";

        }

        prevArrow.addEventListener('click', () => {
            e.classList.toggle('col-sm-6--active');

            if (e.classList.contains('col-sm-6--active')) {
                e.style.display = "block";
            } else {
                e.style.display = "none";

            }
        });

        nextArrow.addEventListener('click', () => {
            e.classList.toggle('col-sm-6--active');

            if (e.classList.contains('col-sm-6--active')) {
                e.style.display = "block";
            } else {
                e.style.display = "none";

            }
        });
    });
};

export default carousel;