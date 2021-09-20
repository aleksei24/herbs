const searchField = document.querySelector('#index-form');
const searchOpenBtn = document.querySelector('#search-field');
const closeFormBtn = document.querySelector('#close-form-btn');
// console.log(searchOpenBtn);
const searchInput = document.querySelector('#search-input');

searchOpenBtn.addEventListener('click', () => {
    searchField.style.display = 'flex';
});

closeFormBtn.addEventListener('click', () => {
    searchField.style.display = 'none';
    searchInput.value = '';
});
console.log(closeFormBtn);
