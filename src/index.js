import modal from './modules/modal';
import accordeon from './modules/accordeon';
import scroll from './modules/scroll';
import slider from './modules/slider';
import carousel from './modules/carousel';
import sendForm from './modules/sendForm';




modal();
accordeon();
scroll();
slider();
carousel();
sendForm({
    formId: 'form1',
});