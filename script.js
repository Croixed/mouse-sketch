const gridContainer = document.querySelector('.grid-container');
const resetButton = document.querySelector('.reset');
const colorButton = document.querySelector('.color-picker');
const rainbowButton = document.querySelector('.rainbow');
const slider = document.querySelector('.slider');
const colorPicker = document.querySelector('.colpick');

let rainbowMode = false;
let colorMode = false;


function genPixels() {
  console.log(this.value);
  //remove any previous divs
  //then set the proper grid columns & rows
  //make a div element with let
  //apply a class
  //apply an event listener
  //append it to the grid container
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  };

  gridContainer.style.gridTemplateColumns = `repeat(${this.value}, 1fr)`; 
  gridContainer.style.gridTemplateRows = `repeat(${this.value}, 1fr)`; 

  for (let i = 0; i < (this.value * this.value); i++) {
    let pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.style.background = 'white';
    pixel.addEventListener("mouseover", addBgStyle)
    gridContainer.appendChild(pixel);
  };
};

function addBgStyle(e) { // I feel like this might be a bad pattern
  if (rainbowMode) {
    e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
  } else if (colorMode) {
    e.target.style.backgroundColor = `${colorPicker.value}` //'white';
  } else {
    e.target.style.backgroundColor = 'black';
  }
};

function toggleRainbow() {
  colorMode = false;
  rainbowMode = !rainbowMode;
  console.log(rainbowMode);
};

function toggleColor () {
  rainbowMode = false;
  colorMode = !colorMode;
  console.log(colorMode);
};

function resetScreen () {
  this.value = 33;
  genPixels();
}

resetButton.addEventListener('click', resetScreen);
rainbowButton.addEventListener('click', toggleRainbow);
colorButton.addEventListener('click', toggleColor);

resetScreen(); // first call to lay out initial grid
slider.oninput = genPixels; // this only accepts funcs not return vals, so forget the ()



// function logSize() { //instead of passing in args, like slider.value,
//   console.log(this.value); //use this.value down here. 
//   //or else it just returns a value instead and tries passing that into .oninput but it doesn't accept that
// };
// slider.oninput = logSize();



// slider.oninput = function() { // no longer need anon
//   console.log(this.value);
// };