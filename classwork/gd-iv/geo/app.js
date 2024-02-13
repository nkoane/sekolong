const getConfig = async () => {
    const response = await fetch('config.json');
    const data = await response.json();
    return data.mapbox_access_token;
};

let mapbox_access_token = await getConfig();

//document.addEventListener('DOMContentLoaded', function () {
navigator.geolocation.getCurrentPosition(function (position) {
    const longitude = position.coords.longitude;
    const latitude = position.coords.latitude;

    const location = document.querySelector('p#location');
    location.innerHTML = 'GPS: ' + longitude + ', ' + latitude;

    mapboxgl.accessToken = mapbox_access_token;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/light-v11', // style URL
        center: [longitude, latitude], // starting position [lng, lat]
        zoom: 17, // starting zoom
    });

    // Create a new marker.
    const marker = new mapboxgl.Marker({
        color: '#aaaaaa',
    })
        .setLngLat([longitude, latitude])
        .addTo(map);
});
//});
