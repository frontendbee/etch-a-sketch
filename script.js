

const container = document.querySelector('#container');
container.style.backgroundColor = "#cccccc";
container.style.height = '800px';
container.style.width = '800px';
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.border = '1px black solid'


const body = document.querySelector('body');
body.style.display = 'flex';
body.style.flexDirection = 'column';
body.style.alignItems = 'center';
body.style.justifyContent = 'center';
body.style.gap = '30px';

const numberBtn = document.createElement('button');
numberBtn.textContent = 'START';
numberBtn.style.width = 'auto';
numberBtn.style.height = 'auto';
body.appendChild(numberBtn);




numberBtn.addEventListener('click', askTheNumber);
function askTheNumber(){
    
    let chosenNumber = prompt('Choose how many pixels per side:');
    createGrid(chosenNumber);
    
};



function createGrid(num) {
    
    container.replaceChildren(); // Rimuove tutti i figli
    let numOfSquare = num*num;
    let pixelSide = 800/num;
    console.log(pixelSide);
    console.log(numOfSquare);
    for (let i = 0; i < numOfSquare; i++) {
        let div = document.createElement('div');

        div.id = 'div' + i;
        
        
        div.style.width = pixelSide + 'px'; 
        div.style.height = pixelSide + 'px';
        
        div.style.backgroundColor = 'white';
        container.appendChild(div);

       
        div.onmouseenter = function(){
            
            let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            div.style.backgroundColor = randomColor;
        }
    }
}


