const button16 = document.getElementsByClassName('16')[0];
const container = document.getElementsByClassName('container')[0];
const rainbow_butt = document.getElementsByClassName('RGB')[0];
const clear = document.getElementsByClassName('clear')[0];
const inputField = document.getElementsByClassName('inputField')[0];
console.log(inputField)
const submitButton = document.getElementsByClassName('submitButton')[0];

// Input box
let inputValue = 16;
submitButton.addEventListener('click', () => {
    inputValue = parseInt(inputField.value);
    console.log(inputValue);
    if (!(Number.isInteger(inputValue) && inputValue > 0 && inputValue <= 100)) {
        alert("You've inputted inappropiate value.");
    };
})
// Add clear button

clear.addEventListener('click', () => {
    const squares = container.getElementsByClassName('newDiv');;

    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = 'white';
    }
});

// Checking if mouse is pressed.
let isMousePressed = false;

document.addEventListener('mousedown',function(event) {
    if (event.button === 0) {
        isMousePressed = true;
        console.log('mosue down')
    }
})

document.addEventListener('mouseup',function(event) {
    if (event.button === 0) {
        isMousePressed = false;
        console.log('mosue up')
    }
})


// Add functionality to button click -> 
// It s need to be rewritten to user input or smthing.
submitButton.addEventListener('click',addSquare(inputValue))

function addSquare(input) {
    const sizeBox = 512/input; 
    for (let i = 0; i < input*input; i++) {
        const square = document.createElement('div');
        // Add style formating
        square.classList.add('newDiv');
        // Add automatic resizing of boxes.
        square.style.height = `${sizeBox}px`;
        square.style.width = `${sizeBox}px`;
        square.style.backgroundColor = "white";
        // Add eventListener to every div
        square.addEventListener('mouseenter', () => {
            console.log('mouse enter')
            if (isMousePressed == true) {
                square.style.backgroundColor = 'black';
            }
        });
        // Append it to container
        container.appendChild(square);
    }
};