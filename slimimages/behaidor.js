var images = [
  "https://i.ytimg.com/vi/ht31PEL41Ag/maxresdefault.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Fl%C3%BCelen_1093.JPG/1920px-Fl%C3%BCelen_1093.JPG",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Village_Monflanquin.jpg/1200px-Village_Monflanquin.jpg"
];
var num = 0;
function next() {
  // DEBUG:
  debugger;
  var x = document.getElementById('slider');
  num++;
  if(num >= images.length){
    num = 0;
  }
  x.src = images[num];
}

function prev() {
  // DEBUG:
  debugger;
  var x = document.getElementById('slider');
  num--;
  if(num < 0){
    num = images.length-1;
  }
  x.src = images[num];
}
