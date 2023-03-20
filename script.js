// grab dom elements and store in JS variables
var form = document.querySelector('form');
var button = document.querySelector('button');
var input = document.getElementById('item');
var notes = document.querySelector('.notes');
// using ternary
var itemsArray = JSON.parse(localStorage.getItem('items')) || [];
localStorage.setItem('items', JSON.stringify(itemsArray));
var notesArray = JSON.parse(localStorage.getItem('items')) || [];
// list of items and append to html
var liMaker = function () {
    var item = notesArray.map(function (note) {
        return "\n        <div class=\"note\">".concat(note, "</div>\n        ");
    }).join('');
    notes.innerHTML = item;
};
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
