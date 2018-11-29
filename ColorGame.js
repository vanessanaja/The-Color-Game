let numSquares = 6;
let colors = generateRandomColors(numSquares);
const squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
const colorDisplay = document.getElementById('colorDisplay');
colorDisplay.textContent = pickedColor;
const messageDisplay = document.querySelector('#message');
const h1 = document.querySelector('h1');
const resetButton = document.querySelector('#reset');
const easyButton = document.querySelector('#easy');
const hardButton = document.querySelector('#hard'); 


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

easyButton.addEventListener('click', function(){
    numSquares = 3;
    easyButton.classList.add('selected');
    hardButton.classList.remove('selected');
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    
    for(let i =0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i]; 
        } else {
            squares[i].style.display = 'none';
        }  
    }
    h1.style.backgroundColor = '#232323';
});
hardButton.addEventListener('click', function(){
    hardButton.classList.add('selected');
    easyButton.classList.remove('selected');
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    
    for(let i =0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i]; 
        squares[i].style.display = 'block'; 
    }
    h1.style.backgroundColor = '#232323';
});

resetButton.addEventListener('click', function(){
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new pickedColor
    pickedColor = pickColor();
    //change color display to match pickedColor
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for(let i =0; i < squares.length; i++){
        //add initial color to squares
        squares[i].style.backgroundColor = colors[i]; 
    }
    h1.style.backgroundColor = 'steelblue';
});

// for(let i =0; i < squares.length; i++){
//     //add initial color to squares
//     squares[i].style.backgroundColor = colors[i]; 
//     squares[i].addEventListener('click', function(){
//         //grab color of clicked square
//         let clickedColor = this.style.backgroundColor;
//             if(clickedColor === pickedColor) {
//                 messageDisplay.textContent = 'Correct!';
//                 changeColor(clickedColor);
//                 h1.style.backgroundColor = pickedColor;
//                 resetButton.textContent = "Play Again?";
//             } else {
//                 this.style.backgroundColor = '#232323';
//                 messageDisplay.textContent = 'Try Again';
//                 resetButton.textContent = "New Colors";
//             }
//     });
// }

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
