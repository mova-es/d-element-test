export const formValidation = () => {
    const inputElems = document.querySelectorAll('input');
    const buttonSubmit = document.querySelector('.modal__button');


    buttonSubmit.addEventListener('submit', function () {
        event.preventDefault();
        
       inputElems.forEach(element => {
        if(element.value === '') {
            element.style.border = '1px solid red';
        } else {
            alert('Форма успешно отправлена');
        }
    }); 
    });
    

}