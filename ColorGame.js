let colors = [
    'rgb(255, 0, 0)', 
    'rgb(255, 255, 0)', 
    'rgb(0, 255, 0)', 
    'rgb(0, 255, 255)', 
    'rgb(0, 0, 255)', 
    'rgb(255, 0, 255)',   
]
const squares = document.querySelectorAll('.square');
let pickedColor = colors[3];
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
                changeColor();
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
