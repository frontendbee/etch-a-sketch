const container = document.querySelector('#container');
container.style.backgroundColor = "#cccccc";
container.style.height = '800px';
container.style.width = '800px';
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
// container.style.margin = 'auto';

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


// function draw(){
//     div.style.backgroundColor = 'black';
// }

function createGrid() {
    
    container.replaceChildren(); // Rimuove tutti i figli

    for (let i = 0; i < 256; i++) {
        let div = document.createElement('div');

        div.id = 'div' + i;

        // let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

        // div.style.backgroundColor = randomColor
        div.style.width = 'calc(6.25% - 2px)';
        div.style.height = 'calc(6.25% - 2px)';
        div.style.border = '1px black solid';
        div.style.backgroundColor = 'white';
        container.appendChild(div);

        // div.addEventListener('hover', draw);
        div.onmouseenter = function(){
            if(div.style.backgroundColor == 'white'){
                div.style.backgroundColor = 'grey';
            } else if (div.style.backgroundColor == 'grey'){
                div.style.backgroundColor = 'white';
            }
        }
    }
}

createGrid();

