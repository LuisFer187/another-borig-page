window.onload = function() {
  var btn = document.getElementById('btn');

  btn.addEventListener("click", clicked);
  console.log(btn);
}

function clicked() {
  alert(Math.random());
}
