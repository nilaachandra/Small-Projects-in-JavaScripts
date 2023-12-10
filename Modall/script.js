let openBtn = document.getElementById('open-btn');
let modalContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn');
let bdy = window

openBtn.addEventListener('click', function() {
    modalContainer.style.display = 'flex';
});

closeBtn.addEventListener('click', function() {
    modalContainer.style.display = 'none';
});


// document.addEventListener('click', function(e) {
//     if (e.target === modalContainer || e.target === closeBtn) {
//         modalContainer.style.display = 'none';
//     }
// });

// modalContainer.addEventListener('click', function(e) {
//     e.stopPropagation();
// });