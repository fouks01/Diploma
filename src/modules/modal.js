const modal = () => {
    const btn = document.getElementById('modal-main');
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalCallback = document.querySelector('.modal-callback');
    const modalClose = document.querySelector('.modal-close');
    const sliderCallback = document.querySelectorAll('.absolute');
    const serviceCallback = document.querySelectorAll('.button-services');



    const showModal = () => {
        modalOverlay.style.display = "block";
        modalCallback.style.display = "block";
    };

    const closeModal = () => {
        modalOverlay.style.display = "none";
        modalCallback.style.display = "none";
    };


    btn.addEventListener('click', (e) => {
        e.preventDefault();
        showModal();
    });

    sliderCallback.forEach((e) => {
        e.addEventListener('click', showModal);
    });

    serviceCallback[0].addEventListener('click', showModal);
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

};

export default modal;