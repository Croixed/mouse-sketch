const gridContainer = document.querySelector('.grid-container');
let slider = document.querySelector('.slider');


function genPixels(size) {
  //make a div element with let
  //apply a class
  //append it to the grid container
  console.log(size);
  return size;
}




for (let i = 0; i < (14 * 14) - 1; i++) {
  //make a div element with let
  //apply a class
  //append it to the grid container
  let pixel = document.createElement('div');
  pixel.classList.add('pixel');
  pixel.textContent = '*';
  gridContainer.appendChild(pixel);
};

slider.oninput = genPixels(Number(slider.value));