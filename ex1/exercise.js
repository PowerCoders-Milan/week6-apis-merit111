var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 45.526001, lng: 9.172130},
    zoom: 8
  });
}

var maker = new google.map.Maker({
    position: { lat: 45.526000, lng: 9.172130},
    map: map
});
