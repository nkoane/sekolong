mapboxgl.accessToken = 'pk.eyJ1IjoibHRkbiIsImEiOiJjajhvN3J1a2gwMGN4MnJvMHkyNDl1bDlxIn0.qM0mzPToSlB0aMwkJqND2w';
let map;

const getMapping = async () => {
    map = await new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 15,
        center: [28.01042043028001, -26.189167640397493],
    });

    navigator.geolocation.getCurrentPosition((pos) => {
        var lat = pos.coords.latitude;
        var lon = pos.coords.longitude;
        console.log('Latitude: ' + lat + ', Longitude: ' + lon);
        document.getElementById('location').innerHTML = 'Latitude: ' + lat + ', Longitude: ' + lon;

        map.jumpTo([lon, lat]);

        // Create a new marker.
        const marker = new mapboxgl.Marker().setLngLat([lon, lat]).addTo(map);
    });
};

getMapping();
