const accordeon = () => {

    const accordeonBlock = document.querySelector('.accordeon');
    const accordeonElement = accordeonBlock.querySelectorAll('.element');
    const accordeonContent = accordeonBlock.querySelectorAll('.element-content');



    accordeonBlock.addEventListener('click', (e) => {
        if (e.target.closest('.element')) {
            const accordeonBtn = e.target.closest('.element');
            accordeonElement.forEach((tab, index) => {
                if (tab === accordeonBtn) {
                    tab.classList.add('active');
                    accordeonContent[index].style.display = 'block';
                } else {
                    tab.classList.remove('active');
                    accordeonContent[index].style.display = 'none';

                }
            });
        }
    });
};

export default accordeon;