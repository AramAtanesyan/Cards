/**
 * generates a unique number between 1 and 1000
 * @returns {string}
 */
const getRandomUniqueNumber = function () {
    const max = 1000;
    const min = 1;

    const randomNum =  (Math.floor( Math.random() * max) + min) + '';
    if(existingNumbers.includes(randomNum)) {
        return getRandomUniqueNumber();
    }

    return randomNum;
}



/**
 * creates a card element with a delete icon and a number inside
 * @param number
 * @returns {HTMLDivElement}
 */
const createCardItem = function (number) {
    const cardItem = document.createElement('div');
    cardItem.classList.add('card-item');
    cardItem.innerText = number;
    cardItem.setAttribute('data-number', number);

    const removeIcon = document.createElement('span');
    cardItem.appendChild(removeIcon)

    removeIcon.addEventListener('click', ev => {
        removeElement(cardItem);
    })

    return cardItem;
}



const resetLocalStorage = function () {
    localStorage.setItem('existingNumbers', existingNumbers.join(', '));
}