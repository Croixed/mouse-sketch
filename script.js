const gridContainer = document.querySelector('.grid-container');
let slider = document.querySelector('.slider');


function genPixels() {
  console.log(this.value);
  //remove any previous divs
  //then set the proper box size
  //make a div element with let
  //apply a class
  //append it to the grid container
  //return this.value;
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  };

  gridContainer.style.gridTemplateColumns = `repeat(${this.value}, 1fr)`; // "repeat(20, 1fr)";
  gridContainer.style.gridTemplateRows = `repeat(${this.value}, 1fr)`; // "repeat(20, 1fr)";

  for (let i = 0; i < (this.value * this.value) - 1; i++) {
    let pixel = document.createElement('div');
    pixel.classList.add('pixel');
    //pixel.textContent = '*';
    pixel.addEventListener("mouseover", addBgClass)
    gridContainer.appendChild(pixel);
  };
};

function addBgClass(e) {
  e.target.style.backgroundColor = "black";
}


// for (let i = 0; i < (14 * 14) - 1; i++) {
//   //make a div element with let
//   //apply a class
//   //append it to the grid container
//   let pixel = document.createElement('div');
//   pixel.classList.add('pixel');
//   pixel.textContent = '*';
//   gridContainer.appendChild(pixel);
// };


genPixels(22);
slider.oninput = genPixels; // this only accepts funcs not vals



// function logSize() { //instead of passing in args, like slider.value,
//   console.log(this.value); //use this.value down here. 
//   //or else it just returns a value instead and tries passing that into .oninput but it doesn't accept that
// };
// slider.oninput = logSize();



// slider.oninput = function() { // no longer need anony
//   console.log(this.value);
// };
