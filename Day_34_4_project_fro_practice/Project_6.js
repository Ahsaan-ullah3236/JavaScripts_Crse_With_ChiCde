 // Get references to elements
 const colorInput = document.getElementById('colorInput');
 const resetBtn = document.getElementById('resetBtn');

 // Event listener for the color input
 colorInput.addEventListener('input', () => {
   document.body.style.backgroundColor = colorInput.value;
 });

 // Event listener for the reset button
 resetBtn.addEventListener('click', () => {
   document.body.style.backgroundColor = '#ffffff'; // Default color
   colorInput.value = '#ffffff'; // Reset the input value
 });