// grab dom elements and store in JS variables
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('item');
const notes = document.querySelector(".notes");

// using ternary
let itemsArray = localStorage.getItem('items')
 ? JSON.parse(localStorage.getItem('items'))
 : [];
localStorage.setItem('items', JSON.stringify(itemsArray));
const notesArray = JSON.parse(localStorage.getItem('items'));

// list of items and append to html
const liMaker = () => {
    const item = notesArray.map((note) => {
        return `
        <div class="note">${note}</div>
        `
    }).join('');
    notes.innerHTML = item; 
}

// add event listener for the form, submit
form.addEventListener('submit', function (e) {
    e.preventDefault();
    itemsArray.push(input.value);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    liMaker();
    input.value = ''; 
    location.reload();
});


// event listener for click button
button.addEventListener('click', function () {
    localStorage.clear(); // clear local storage
    itemsArray = [];
    liMaker();
    location.reload();
});
liMaker();