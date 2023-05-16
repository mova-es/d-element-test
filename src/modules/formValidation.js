export const formValidation = () => {
    const formEl = document.querySelector('.modal__form');
    const inputElems = document.querySelectorAll('.modal__input');
    const modalwindow = document.querySelector('.modal');
    const popupMessage = document.querySelector('.popup-message');

    formEl.onsubmit = function () {
        let emptyInputs = Array.from(inputElems).filter(input => input.value === '');

        inputElems.forEach(input => {
            if(input.value === '') {
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });

        if(emptyInputs.length !== 0) {
            return false;
        } else {
            modalwindow.style.opacity = 0;
            modalwindow.style.visibility = 'hidden';
            popupMessage.style.visibility = 'visible';
            popupMessage.style.opacity = 1;
        }
    }
}