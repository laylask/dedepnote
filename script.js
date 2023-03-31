// Get the canvas element
const canvas = document.getElementById('canvas');

// Set the canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Get the 2D context of the canvas
const ctx = canvas.getContext('2d');

// Loop through each pixel and set a random color
for (let x = 0; x < canvas.width; x++) {
  for (let y = 0; y < canvas.height; y++) {
    // Set a random color for each pixel
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;

    // Draw a 1x1 pixel at this location
    ctx.fillRect(x, y, 1, 1);
  }
}
