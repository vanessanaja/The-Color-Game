let colors = generateRandomColors(6);
const squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
const colorDisplay = document.getElementById('colorDisplay');
colorDisplay.textContent = pickedColor;
const messageDisplay = document.querySelector('#message');
const h1 = document.querySelector('h1');
const resetButton = document.querySelector('#reset');
resetButton.textContent = 'New Colors';

resetButton.addEventListener('click', function(){
    //generate all new colors
    colors = generateRandomColors(6);
    //pick a new pickedColor
    pickedColor = pickColor();
    //change color display to match pickedColor
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for(let i =0; i < squares.length; i++){
        //add initial color to squares
        squares[i].style.backgroundColor = colors[i]; 
    }
    h1.style.backgroundColor = '#232323';
});

for(let i =0; i < squares.length; i++){
    //add initial color to squares
    squares[i].style.backgroundColor = colors[i]; 
    squares[i].addEventListener('click', function(){
        //grab color of clicked square
        let clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor) {
                messageDisplay.textContent = 'Correct!';
                changeColor(clickedColor);
                h1.style.backgroundColor = pickedColor;
                resetButton.textContent = "Play Again?";
            } else {
                this.style.backgroundColor = '#232323';
                messageDisplay.textContent = 'Try Again';
                resetButton.textContent = "New Colors";
            }
    });
}

function changeColor(color){
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = pickedColor;
    }
}
function pickColor(){
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomColors(num){
    let arr = [];
    for(let i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}
function randomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return 'rgb('+ r + ', ' + g + ', ' + b +')';
}
