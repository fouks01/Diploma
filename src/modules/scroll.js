const scroll = () => {
    const linkUp = document.querySelector('.up');
    const anchors = document.querySelectorAll('a[href*="#"]');
    const sliderTable = document.querySelectorAll('.table');

    console.log(sliderTable);



    linkUp.style.display = "none";


    sliderTable.forEach((e) => {
        e.style.opacity = 1;
        e.style.visibility = 'visible';
    });

    linkUp.addEventListener('click', () => window.scrollTo({
        top: 0,
        behavior: 'smooth',
    }));


    window.addEventListener('scroll', function () {
        if (window.pageYOffset < 1000) {
            linkUp.style.display = "none";
        } else {
            linkUp.style.display = "block";
        }
    });


    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const blockID = anchor.getAttribute('href').substr(1);

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
};

export default scroll;