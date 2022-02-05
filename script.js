const gridContainer = document.querySelector('.grid-container');
const resetButton = document.querySelector('.reset');
const colorButton = document.querySelector('.color-picker');
const rainbowButton = document.querySelector('.rainbow');
const slider = document.querySelector('.slider');

let rainbowMode = false;


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
    //pixel.textContent = '*';
    pixel.addEventListener("mouseover", addBgStyle)
    gridContainer.appendChild(pixel);
  };
};

function resetScreen() { // copied code from gen func, instead I should move to sub functions and callback
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  };
  gridContainer.style.gridTemplateColumns = `repeat(${slider.value}, 1fr)`; 
  gridContainer.style.gridTemplateRows = `repeat(${slider.value}, 1fr)`; 
  for (let i = 0; i < (slider.value * slider.value); i++) {
    let pixel = document.createElement('div');
    pixel.classList.add('pixel');
    //pixel.textContent = '*';
    pixel.addEventListener("mouseover", addBgStyle)
    gridContainer.appendChild(pixel);
  };
  console.log(slider.value);
};

function addBgStyle(e) { // I feel like this might be a bad pattern
  if (rainbowMode) {
    e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
  } else {
    e.target.style.backgroundColor = 'black';
  }
};

function rainbowToggle() {
  rainbowMode = !rainbowMode;
  console.log(rainbowMode);
};

resetButton.addEventListener('click', resetScreen);
rainbowButton.addEventListener('click', rainbowToggle);

slider.oninput = genPixels; // this only accepts funcs not return vals, so forget the ()
resetScreen();


// function logSize() { //instead of passing in args, like slider.value,
//   console.log(this.value); //use this.value down here. 
//   //or else it just returns a value instead and tries passing that into .oninput but it doesn't accept that
// };
// slider.oninput = logSize();



// slider.oninput = function() { // no longer need anon
//   console.log(this.value);
// };
