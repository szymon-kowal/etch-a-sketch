const button16 = document.getElementsByClassName('16')[0];
const container = document.getElementsByClassName('container')[0]


// Add functionality to button click -> It s need to be rewritten to user input or smthing.
button16.addEventListener('click',() => {
    for (let i = 0; i < 16*16; i++) {
        const square = document.createElement('div');
        square.classList.add('newDiv');
        square.style.height = '32px';
        square.style.width = '32px';
        square.style.backgroundColor = "white";
        container.appendChild(square);
    }
    return
})