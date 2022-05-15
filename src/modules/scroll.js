const scroll = () => {
    const linkUp = document.querySelector('.up');


    linkUp.style.display = "none";


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
};

export default scroll;