document.addEventListener('DOMContentLoaded', init);

function init() {

  waypoint();
}

function waypoint() {

  var waypoint = document.getElementById('waypoint');
  var target = document.getElementById('waypoint-target');

  waypoint.addEventListener('click', scrollTo);

  function scrollTo() {
    var offsetTop = target.offsetTop - 80;
    scroll.to(document.body, offsetTop, 750);
  }
}
