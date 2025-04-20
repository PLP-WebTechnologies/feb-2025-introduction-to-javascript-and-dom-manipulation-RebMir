// Array of background colors to cycle through
const colors = ['grey', 'blue', 'green', 'purple', 'orange', 'teal', 'magenta', 'black'];
let currentColorIndex = 0;

// Change text content
function changeText() {
    const description = document.getElementById('description');
    description.textContent = 'The paragraph text has been changed dynamically!';
}

// Change background color
function changeColor() {
    const para = document.getElementById('style-paragraph');
    para.style.backgroundColor = colors[currentColorIndex];
    para.style.color = 'white';
    para.style.padding = '10px';
    para.style.borderRadius = '8px';

    currentColorIndex = (currentColorIndex + 1) % colors.length;
}

// Add list item
function addItem() {
    const ul = document.getElementById('item-list');
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${ul.children.length + 1}`;
    ul.appendChild(newItem);
}

// Remove last list item
function removeItem() {
    const ul = document.getElementById('item-list');
    if (ul.lastElementChild) {
    ul.removeChild(ul.lastElementChild);
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('text-btn').addEventListener('click', changeText);
    document.getElementById('color-btn').addEventListener('click', changeColor);
    document.getElementById('add-btn').addEventListener('click', addItem);
    document.getElementById('remove-btn').addEventListener('click', removeItem);
});
