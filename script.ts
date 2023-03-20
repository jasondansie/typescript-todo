// grab dom elements and store in JS variables
const form: HTMLFormElement | null = document.querySelector('form')!;
const button = document.querySelector('button')! as HTMLInputElement;
const input = document.getElementById('item')! as HTMLInputElement;
const notes = document.querySelector('.notes')!;


// using ternary
let itemsArray: string[] = JSON.parse(localStorage.getItem('items')!) || [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const notesArray: string[] = JSON.parse(localStorage.getItem('items')!) || [];

// list of items and append to html
const liMaker = () => {
    const item: string = notesArray.map((note: string) => {
        return `
        <div class="note">${note}</div>
        `;
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