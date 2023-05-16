export const showForm = () => {
    const showButton = document.querySelector('.team__talk');
    const modalwindow = document.querySelector('.modal');
    const closeModalWindow = document.querySelector('.modal__close');
    const bodyEl = document.querySelector('body');

    modalwindow.style.cssText = `
    opacity: 0;
    transition: opacity 300ms ease;
    `;

    const closeModal = event => {
        const target = event.target;

        if(target === modalwindow || target === closeModalWindow) {
            modalwindow.style.opacity = 0;
            bodyEl.classList.remove('modal__active');

            setTimeout(() => {
                modalwindow.style.visibility = 'hidden';
            }, 300)
        }
    }

    const openModal = () => {
        modalwindow.style.visibility = 'visible';
        modalwindow.style.opacity = 1;
        bodyEl.classList.add('modal__active');
    }

    showButton.addEventListener('click', openModal);
    modalwindow.addEventListener('click', closeModal);
}