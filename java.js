 // Your provided JavaScript code goes here
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
 style2.innerHTML = '.button-black:after { background: #E8A2DC; }';

 // Input box / check if inputs are ok. // Finds all child elements
 let inputValue = 16;

 // Switch background color if black and rgb buttons are clicked 
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
         alert("You've inputted an inappropriate value. Please input an integer value between 1 and 100.");
         return;
     }
     removeChildNode(container);
     addSquare(inputValue);
 });

 // Add clear button
 clear.addEventListener('click', () => {
     const squares = container.getElementsByClassName('newDiv');
     for (let i = 0; i < squares.length; i++) {
         squares[i].style.backgroundColor = 'white';
     }
 });

 // Checking if the mouse is pressed.
 let isMousePressed = false;

 document.addEventListener('mousedown', function (event) {
     if (event.button === 0) {
         isMousePressed = true;
     }
 }, true);

 document.addEventListener('mouseup', function (event) {
     if (event.button === 0) {
         isMousePressed = false;
     }
 }, true);

 container.addEventListener('touchstart', function (event) {
     event.preventDefault();
     console.log('Touch start');
     isMousePressed = true;
     console.log('isMousePressed:', isMousePressed);
 }, true);

 container.addEventListener('touchend', function () {
     console.log('Touch end');
     isMousePressed = false;
     console.log('isMousePressed:', isMousePressed);
 }, true);

 // Remove squares from the parent node
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
     const windowWidth = window.innerWidth;
     const sizeBox = windowWidth > 520 ? 512 / input : 300 / input;
     console.log(sizeBox);
     console.log(windowWidth);

     for (let i = 0; i < input * input; i++) {
         const square = document.createElement('div');
         applySquareStyles(square, sizeBox);
         addEventListeners(square);
         container.appendChild(square);
     }

     function applySquareStyles(square, sizeBox) {
         square.classList.add('newDiv');
         square.style.height = `${sizeBox}px`;
         square.style.width = `${sizeBox}px`;
         square.style.backgroundColor = "white";
     }

     function addEventListeners(square) {
         square.addEventListener('mouseenter', () => checkIsMousePressed(square));
         square.addEventListener('touchmove', (event) => {
             event.preventDefault();
             checkIsMousePressed(square);
         });
     }

     function checkIsMousePressed(square) {
         console.log(isMousePressed);
         if (isMousePressed) {
             if (colorValue === 0) {
                 square.style.backgroundColor = 'black';
             } else if (colorValue === 1) {
                 square.style.backgroundColor = `rgb(${getRandomInt()},${getRandomInt()},${getRandomInt()})`;
             }
         }
     }

     function getRandomInt() {
         return Math.floor(Math.random() * 256);
     }
 }

 addSquare(inputValue);