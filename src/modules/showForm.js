export const showForm = () => {
    const showButton = document.querySelector('.team__talk');
    const modalwindow = document.querySelector('.modal');
    const closeModalWindow = document.querySelector('.modal__close');

    modalwindow.style.cssText = `
    opacity: 0;
    transition: opacity 300ms ease;
    `;

    const closeModal = event => {
        const target = event.target;
        console.log(target);

        if(target === modalwindow || target === closeModalWindow) {
            modalwindow.style.opacity = 0;

            setTimeout(() => {
                modalwindow.style.visibility = 'hidden';
            }, 300)
        }
    }

    const openModal = () => {
        modalwindow.style.visibility = 'visible';
        modalwindow.style.opacity = 1;
    }

    showButton.addEventListener('click', openModal);
    modalwindow.addEventListener('click', closeModal);
}