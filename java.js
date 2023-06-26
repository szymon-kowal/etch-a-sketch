const container = document.getElementsByClassName('container')[0];
const rainbow_button = document.getElementsByClassName('button-85')[0];
const clear = document.getElementsByClassName('clear')[0];
const inputField = document.getElementsByClassName('inputField')[0];
const submitButton = document.getElementsByClassName('submitButton')[0];
const black_button = document.getElementsByClassName('button-black')[0];
// Create var to store child Elements
let childElements;
// Create vars to change color of buttons
const style = document.createElement('style');
style.innerHTML = '.button-85:after { background: #E8A2DC; }';

const style2 = document.createElement('style');
style2.innerHTML =  '.button-black:after { background: #E8A2DC; }';



// Input box / check if inputs is ok. // Finds all child elements
let inputValue = 16;
addSquare(inputValue);

// Switch background colour if black and rgb buttons are clicked 
// and switch the colors during painting on container.
let colorValue = 0;

rainbow_button.addEventListener('click', () => {
    colorValue = 1;
    // Append the style rule to the document's head
    document.head.appendChild(style);
    document.head.removeChild(style2);

});



black_button.addEventListener('click', () => {
    colorValue = 0;
    // Append the style rule to the document's head
    document.head.appendChild(style2);
    document.head.removeChild(style);

});


submitButton.addEventListener('click', () => {
    inputValue = parseInt(inputField.value);
    if (!(Number.isInteger(inputValue) && inputValue > 0 && inputValue <= 100)) {
        alert("You've inputted inappropiate value. Please input int value between 1 and 100.");
        return;
    };
    removeChildNode(container);
    addSquare(inputValue);
})
// Add clear button

clear.addEventListener('click', () => {
    const squares = container.getElementsByClassName('newDiv');
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = 'white';
    }
});

// Checking if mouse is pressed.
let isMousePressed = false;

document.addEventListener('mousedown',function(event) {
    if (event.button === 0) {
        isMousePressed = true;
    }
})

document.addEventListener('mouseup',function(event) {
    if (event.button === 0) {
        isMousePressed = false;
    }
})

// Remove squares from parent node
function removeChildNode(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function getRandomInt() {
    return (Math.floor(Math.random() * 255) + 1);
}
// Add squares to the container
function addSquare(input) {
    const sizeBox = 512/input; 

    for (let i = 0; i < input*input; i++) {
        const square = document.createElement('div');
        // Add style formating
        square.classList.add('newDiv');
        // Add automatic resizing of boxes 
        square.style.height = `${sizeBox}px`;
        square.style.width = `${sizeBox}px`;
        square.style.backgroundColor = "white";
        // Add eventListener to every div
        square.addEventListener('mouseenter', () => {
            if (isMousePressed == true) {
                if (colorValue == 0) {
                    square.style.backgroundColor = 'black';
                } else if (colorValue == 1 ) {
                    square.style.backgroundColor = `rgb(${getRandomInt()},${getRandomInt()},${getRandomInt()})`;
                }
            }
        });
        // Append it to container
        container.appendChild(square);
    }
};