window.onload = () => {
    initApp();
}


const drawBoard = function () {
    cardItemsContainer.innerHTML = '';

    existingNumbers.forEach(number => {
        cardItemsContainer.appendChild(createCardItem(number))
    })
}


/**
 * handles element add and delete
 * @param number
 * @param action
 */
const existingNumbersChangeHandler = function(number, action) {
    if(action === 'add') {
        existingNumbers.push(number + '');
    } else if(action === 'remove') {
        const indexOfNumberInExistingNumbers = existingNumbers.indexOf(number);
        existingNumbers.splice(indexOfNumberInExistingNumbers, 1);
    }

    resetLocalStorage();
}


const removeElement = function (element) {

    const number = element.dataset.number;
    element.remove();

    existingNumbersChangeHandler(number, 'remove')
}


const initAddButton = function () {

    addCardBtn.addEventListener('click', () => {
        let randomUniqueNumber = getRandomUniqueNumber();
        if(!randomUniqueNumber) {
            return;
        }

        isSorted = false;
        existingNumbersChangeHandler(randomUniqueNumber, 'add');

        const element = createCardItem(randomUniqueNumber);
        cardItemsContainer.appendChild(element);
    })

}


const initSortButton = function () {

    sortCardsBtn.addEventListener('click', () => {
        if(isSorted) {
            return;
        }

        existingNumbers.sort((a, b) => {
            return +a > +b ? 1 : -1;
        })
        isSorted = true;
        drawBoard();
        resetLocalStorage();
    })
}


const initApp = function () {
    drawBoard();
    initAddButton();
    initSortButton();
}














