const button16 = document.getElementsByClassName('16')[0];
const container = document.getElementsByClassName('container')[0]
let isMousePressed = false;

// Checking if mouse is pressed.
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
button16.addEventListener('click',() => {
    for (let i = 0; i < 16*16; i++) {
        const square = document.createElement('div');
        // Add style formating
        square.classList.add('newDiv');
        square.style.height = '32px';
        square.style.width = '32px';
        square.style.backgroundColor = "white";
        // Add eventListener to every div
        square.addEventListener('mouseenter', () => {
            console.log('mouse enter')
            if (isMousePressed == true) {
                square.style.backgroundColor = 'black';
            }
        })
        // Append it to container
        container.appendChild(square);
    }
    return
})