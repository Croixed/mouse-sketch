const gridContainer = document.querySelector('.grid-container');
let slider = document.querySelector('.slider');


// function genPixels(size) {
//   console.log('test');
//   //make a div element with let
//   //apply a class
//   //append it to the grid container
//   console.log(size + ' inline');
//   return size;
// };




for (let i = 0; i < (14 * 14) - 1; i++) {
  //make a div element with let
  //apply a class
  //append it to the grid container
  let pixel = document.createElement('div');
  pixel.classList.add('pixel');
  pixel.textContent = '*';
  gridContainer.appendChild(pixel);
};

function logSize() { //instead of passing in args, like slider.value,
  console.log(this.value); //use this.value down here. 
  //or else it just returns a value instead and tries passing that into .oninput but it doesn't accept that
};

slider.oninput = logSize; // this only accepts funcs not vals

// slider.oninput = function() { // no longer need anony
//   console.log(this.value);
// };
