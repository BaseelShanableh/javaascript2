const cc = document.getElementById('cc');
cc.style.width = '200px';
cc.style.height = '200px';
cc.style.transition = 'background-color 0.3s ease';

let isRed = false;

setInterval(function() {
  cc.style.backgroundColor = isRed ? 'blue' : 'red';
  isRed = !isRed;
}, 1000); // Change color every 2 seconds (2000 milliseconds)
