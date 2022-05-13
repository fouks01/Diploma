const scroll = () => {

    const linkUp = document.querySelector('.up');


    linkUp.addEventListener('click', () => window.scrollTo({
        top: 0,
        behavior: 'smooth',
    }));
};

export default scroll;