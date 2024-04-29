const toggleButton = document.getElementById('toggle-button');
const popupContainer = document.getElementById('popup-container');
const overlay = document.getElementById('overlay');
const closeButton = document.getElementById('close-button');

toggleButton.addEventListener('click', () => {
    popupContainer.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
    popupContainer.style.display = 'none';
});

overlay.addEventListener('click', () => {
    popupContainer.style.display = 'none';
});