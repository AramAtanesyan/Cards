const cardItemsContainer = document.getElementById('card-items-container');
const sortCardsBtn = document.getElementById('sort-cards-btn');
const addCardBtn = document.getElementById('add-card-btn');

const localStorageNumbers = localStorage.getItem('existingNumbers');
const existingNumbers = localStorageNumbers ? localStorageNumbers.split(', ') : [];


let isSorted = false