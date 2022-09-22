// function initMap(){
//     var options = {
//         center : {lat:23.0774 , lng76:76.8513},
//         zoom :8,
//     }

//     map = new google.maps.Map(document.getElementById('map'),options)
    
// }


// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 22.9734, lng: 78.6569 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: { lat: 23.0774, lng: 76.8513 },
      map: map,
    });
  }


const detailwindow =new google.maps.InfoWindow({
    content: `<h2>Vit Bhopal</h2>`

});

marker.addlistener("mouseover",()=>{
    detailwindow.open(map,marker);
})
