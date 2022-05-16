const sendForm = ({
    formId
}) => {
    const form = document.getElementById(formId);
    const statusBlock = document.createElement('div');
    const loadText = 'Загрузка...';
    const errorText = 'Ошибка...';
    const successText = 'Спасибо! Менеджер с вами свяжется!';
    const text = document.querySelector('[name="fio"]');
    const tel = document.querySelector('[name="tel"]');


    text.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-Я\s-]/gi, '');
    });

    tel.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9\+]/gi, '');
    });

    const validate = (list) => {
        let success = true;

        if (text.value.trim() != '' && /[0-9\+]/gi.test(tel.value)) {
            success = true;
        } else {
            success = false;
        }

        return success;
    };


    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
    };

    const submitForm = () => {
        let formElements = [];
        const formInputElements = form.querySelectorAll('input'); //?

        formElements.push(formInputElements[0]);
        formElements.push(formInputElements[1]);


        const formData = new FormData(form);
        const formBody = {};

        statusBlock.textContent = loadText;

        form.append(statusBlock);


        formData.forEach((val, key) => {
            formBody[key] = val;
        });



        if (validate(formElements)) {
            sendData(formBody).then(data => {
                    statusBlock.textContent = successText;
                    setTimeout(() => {
                        statusBlock.textContent = '';
                    }, 2000);
                    formElements.forEach(input => {
                        input.value = '';
                    });
                })
                .catch(error => {
                    statusBlock.textContent = errorText;
                })

        } else {
            alert('Данные не валидны!');
        }
    };

    try {
        if (!form) {
            throw new Error('Верни форму на место, чумба!');
        }
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            submitForm();
        });
    } catch (error) {
        console.log(error.message);
    }



};

export default sendForm;