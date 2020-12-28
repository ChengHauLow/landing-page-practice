const toggle = document.getElementById('toggle');
const closeModal = document.getElementById('close');
const openModal = document.getElementById('open');
const modal = document.getElementById('modal');

// Toggle nav
toggle.addEventListener('click', () =>document.body.classList.toggle('show-nav'))

// Show modal
openModal.addEventListener('click', ()=> modal.classList.add('show-modal'));

// Hide modal
closeModal.addEventListener('click', ()=> modal.classList.remove('show-modal'));

// Hide modal from clicking outside modal
window.addEventListener('click', e => e.target == modal && modal.classList.remove('show-modal'))
