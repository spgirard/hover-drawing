// SITE JAVASCRIPT

console.log("Welcome to Mouse Draw");

// get main grid container
const mousePad = document.getElementById("mouse-pad");

// set up game button
const startButton = document.getElementById("start-button");
startButton.addEventListener("click", function(){
    getGameParams();
});



// FUNCTIONS

function clearGrid(){
    // clears grid for new round
    while (mousePad.firstChild){
        mousePad.removeChild(mousePad.firstChild)
    }
}

function createGrid(size){
    // create row divs with col divs inside
    let rowDiv;
    let colDiv;
    // let increment = 100/size;
    for(let i = 1; i <= size; i++){
        // create row
        rowDiv = document.createElement("div");
        rowDiv.classList.add("grid-row");
        // create columns inside row
        for (x = 1; x <= size; x++) {
            // create col
            colDiv = document.createElement("div");
            // colDiv.style.minHeight = increment + "%";
            // colDiv.style.minWidth = increment + "%";
            colDiv.classList.add("grid-col");
            // colDiv.textContent = "*";
            // append col
            rowDiv.appendChild(colDiv);
        }
        // append row
        mousePad.appendChild(rowDiv);
    }
}

function captureCells(){
    // set up cells for color change
    // const rows = mousePad.querySelectorAll(".grid-row");
    // console.log(rows.length);
    const cells = mousePad.querySelectorAll(".grid-col");
    // console.log(cells.length);
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("mouseenter", function(e){
            console.log(e.target);
            e.target.style.backgroundColor = getRandomHexColor();
        })
    }

    // cells.addEventListener("click", function(){
    //     console.log("hovering");
    // })
}

function getGameParams(){
    let gridSize = parseInt(prompt("What size grid? (2-100)"));
    if (gridSize < 2) {
        gridSize = 2;
    } else if (gridSize > 100) {
        gridSize = 100;
    } else if (isNaN(gridSize)) {
        gridSize = 2
    }
    clearGrid();
    createGrid(gridSize);
    captureCells();
}

function random15(){
    // generate number between 0 & 15
    return Math.floor(Math.random() * 16);
}

function getRandomHexColor() {
    // generate a random hex color code
    let color = "#";

    for (let i = 1; i <= 6; i++) {
        let rnd = random15();
        
        switch(rnd) {
            case 10:
                rnd = "A";
                break;
            case 11:
                rnd =  "B";
                break;
            case 12:
                rnd =  "C";
                break;
            case 13:
                rnd =  "D";
                break;
            case 14:
                rnd =  "E";
                break;
            case 15:
                rnd =  "F";
                break;                                                          
        }
        color += String(rnd);
    }
    console.log(color);
    return color;
}

// console.log(getRandomHexColor());