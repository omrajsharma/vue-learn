//      GOAL ADDER

const buttonElement = document.querySelector('button');
const inputElement = document.querySelector('input');
const listElement = document.querySelector('ul');

function addGoal() {
    if(inputElement.value != ''){
        const enteredValue = inputElement.value;
        const listItemElement = document.createElement('li');   // created new list item
        listItemElement.textContent = enteredValue;     // added text in the item
        listElement.appendChild(listItemElement);       // appended in the list
        inputElement.value = '';
    }
}

buttonElement.addEventListener('click', addGoal);
buttonElement.addEventListener('keypress', function(e){
    console.log(e);
})