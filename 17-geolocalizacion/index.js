let map, posicion1,marker1;
let posicion2, marker2, posicion3, marker3;

function initMap() {
     posicion1 = {
        lat:48.8568623,
        lng:2.4370379
    };
    posicion2 = {
        lat:46.6394469,
        lng: 7.6525349
    };
    posicion3 = {
        lat:42.5330675,
        lng:1.5871068,
    };
  map = new google.maps.Map(document.getElementById("map"), {
    center: posicion1,
    zoom: 4,
  });
marker1 = new google.maps.Marker({
    position: posicion1,
    map,
    title: "Torre Eiffel"
})
  
marker2 = new google.maps.Marker({
    position: posicion2,
    map,
    title: "Suiza"
})
  
marker3 = new google.maps.Marker({
    position: posicion3,
    map,
    title: "Andorra"
})
}

