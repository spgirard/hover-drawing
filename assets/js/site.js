// SITE JAVASCRIPT

console.log("Welcome to Mouse Draw");

// get main grid container
const mousePad = document.getElementById("mouse-pad");

// set up default grid size and color scheme
let currentGridSize = 12;
let currentColorScheme = "darker";

// set up size area
const sizeArea = document.getElementById("size-area");

// set up reset button
const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", function(){
    newGrid()
});

// set up size buttons
const larger = document.getElementById("larger");
larger.addEventListener("click", function() {
    largerGrid();
}) 
const smaller = document.getElementById("smaller");
smaller.addEventListener("click", function() {
    smallerGrid();
})

// set up color paintbrushes
const black = document.getElementById("black");
black.addEventListener("click", function() {
    console.log("black");
    changeCurrentColorScheme("darken");
})
const white = document.getElementById("white");
white.addEventListener("click", function() {
    console.log("white");
    changeCurrentColorScheme("lighten");
})
const warm = document.getElementById("warm");
warm.addEventListener("click", function() {
    console.log("warm");
    changeCurrentColorScheme("warm");
})
const cool = document.getElementById("cool");
cool.addEventListener("click", function() {
    console.log("cool");
    changeCurrentColorScheme("cool");
})
const rnd = document.getElementById("rnd");
rnd.addEventListener("click", function() {
    console.log("rnd");
    changeCurrentColorScheme("rnd");
})

// create warm array
const warmArr = createWarmArray();

// FUNCTIONS

function randomPaintChange() {
    rnd.style.color = getRandomHexColor();
}

function loadPageDefault() {
    // for body onload()
    newGrid(12);
    setInterval(randomPaintChange, 1000);
    changeCurrentColorScheme("darken");
}

function largerGrid() {
    console.log(currentGridSize);
    if (currentGridSize < 100) {
        currentGridSize ++;
        newGrid(currentGridSize);
    }
}

function smallerGrid() {
    console.log(currentGridSize);
    if (currentGridSize > 2) {
        currentGridSize --;
        newGrid(currentGridSize);
    }
}

function newGrid() {
    clearGrid();
    createGrid(currentGridSize);
}
    
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
    sizeArea.textContent=`${size} x ${size}`;
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
    captureCells()
}

function captureCells(){
    // set up cells for color change
    const cells = mousePad.querySelectorAll(".grid-col");
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", function(e){
            e.target.style.backgroundColor = changeGridColor(currentColorScheme);
        })
    }
}

// color functions

function createWarmArray() {
    // create an array of all warm HSL colors
    let arr = [];
    for (let i = 0; i<90; i++) {
        arr.push(i);
    }
    for (let i = 271; i <= 360; i++) {
        arr.push(i);
    }
    return arr;
}

function changeCurrentColorScheme(scheme) {
    currentColorScheme = scheme;
}

function changeGridColor(colorScheme) {
    let newColor;
    switch (colorScheme) {
        case "darken":
            // newColor = darkenColor();
            newColor = "#000";
            break;
        case "lighten":
            // newColor = lightenColor();
            newColor = "#fff";
            break;
        case "warm":
            newColor = warmColor();
            break;
        case "cool":
            newColor = coolColor();
            break;
        case "rnd":
            newColor = getRandomHexColor();
            break;
    }
    console.log(newColor);
    return newColor;
}

function darkenColor() {
    // could add darkening effect for current color
}

function lightenColor() {
        // could add lightening effect for current color
}

function warmColor() {
    let num = randomBetween(0, warmArr.length);
    let hColor = warmArr[num];
    let s = randomBetween(50,100);
    let l = randomBetween(30,70);
    return `hsl(${hColor},${s}%,${l}%)`;    
}

function coolColor() {
    let hColor = randomBetween(91, 269);
    let s = randomBetween(50,100);
    let l = randomBetween(30,70);
    console.log(hColor, s, l);
    return `hsl(${hColor},${s}%,${l}%)`;
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
    return color;
}


function randomBetween(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
function random100(){
    // generate number between 0 & 100
    return Math.floor(Math.random() * 100);
}

function random15(){
    // generate number between 0 & 15
    return Math.floor(Math.random() * 16);
}



