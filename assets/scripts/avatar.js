
// Random pixel grid using canvas
// var canvas = document.createElement('canvas');
// canvas.width = canvas.height = 800;
// var ctx = canvas.getContext('2d');
// var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

// function randomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// for (var i = 0; i < imgData.data.length; i += 4) {
//   imgData.data[i] = randomInt(0, 255); // red
//   imgData.data[i+1] = randomInt(0, 255); // green
//   imgData.data[i+2] = randomInt(0, 255); // blue
//   imgData.data[i+3] = 255; // alpha
// }

// ctx.putImageData(imgData, 0, 0);
// document.body.appendChild(canvas);

const svg = document.querySelector("svg");

let svgns = "http://www.w3.org/2000/svg";
let avatar = document.createElementNS(svgns, "rect");

let base_width = 800
let base_height = 800

document.querySelector("svg").style.height = base_height
document.querySelector("svg").style.width = base_width

avatar.setAttributeNS(null, "x", 25);
avatar.setAttributeNS(null, "y", 25);
avatar.setAttributeNS(null, "width", base_width);
avatar.setAttributeNS(null, "height", base_height);
avatar.setAttributeNS(null, "fill", "green"); 

svg.appendChild(avatar)
