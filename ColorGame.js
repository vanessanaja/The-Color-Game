let colors = generateRandomColors(6);
const squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
const colorDisplay = document.getElementById('colorDisplay');
colorDisplay.textContent = pickedColor;
const messageDisplay = document.querySelector('#message');

for(let i =0; i < squares.length; i++){
    //add initial color to squares
    squares[i].style.backgroundColor = colors[i]; 
    squares[i].addEventListener('click', function(){
        //grab color of clicked square
        let clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor) {
                messageDisplay.textContent = 'Correct!';
                changeColor(clickedColor);
            } else {
                this.style.backgroundColor = '#232323';
                messageDisplay.textContent = 'Try Again';
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
