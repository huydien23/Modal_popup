var btnOpen = document.querySelector('.open__modal-btn');
var modal = document.querySelector('.modal');
var iconClose = document.querySelector('.modal__header i');
var btnClose = document.querySelector('.modal__footer button');

function toggleModal(e) {
    modal.classList.toggle('hide');
}

btnOpen.addEventListener('click', toggleModal);
iconClose.addEventListener('click', toggleModal);
btnClose.addEventListener('click', toggleModal);
modal.addEventListener('click',  function(e) {
    if(e.target === modal) {
        toggleModal();
    }
});
