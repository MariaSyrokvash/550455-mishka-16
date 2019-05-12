function initMap() {
  var coordinates = {lat: 59.936624, lng: 30.322059},

      map = new google.maps.Map(document.getElementById('map'), {
          center: coordinates
      });

      marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        icon: image
    });
}
