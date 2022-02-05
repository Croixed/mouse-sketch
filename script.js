const gridContainer = document.querySelector('.grid-container');
const resetButton = document.querySelector('.reset');
const colorButton = document.querySelector('.color-picker');
const rainbowButton = document.querySelector('.rainbow');
const slider = document.querySelector('.slider');


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

  gridContainer.style.gridTemplateColumns = `repeat(${this.value}, 1fr)`; // "repeat(20, 1fr)";
  gridContainer.style.gridTemplateRows = `repeat(${this.value}, 1fr)`; // "repeat(20, 1fr)";

  for (let i = 0; i < (this.value * this.value); i++) {
    let pixel = document.createElement('div');
    pixel.classList.add('pixel');
    //pixel.textContent = '*';
    pixel.addEventListener("mouseover", addBgClass)
    gridContainer.appendChild(pixel);
  };
};

function addBgClass(e) {
  //e.target.style.backgroundColor = "black";
  e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
}




slider.oninput = genPixels; // this only accepts funcs not vals



// function logSize() { //instead of passing in args, like slider.value,
//   console.log(this.value); //use this.value down here. 
//   //or else it just returns a value instead and tries passing that into .oninput but it doesn't accept that
// };
// slider.oninput = logSize();



// slider.oninput = function() { // no longer need anon
//   console.log(this.value);
// };
