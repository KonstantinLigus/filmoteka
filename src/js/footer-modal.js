const refs = {
    openModal: document.querySelector('[open-modal]'),
    closeModal: document.querySelector('[close-modal]'),
    backdrop: document.querySelector('[js-backdrop]'),
}

refs.openModal.addEventListener('click', onOpenModal)
refs.closeModal.addEventListener('click', onCloseModal)

function onOpenModal() {
    document.backdrop.classList.add('.show-modal')
}
function onCloseModal() {
    document.backdrop.classList.remove('.show-modal')
}