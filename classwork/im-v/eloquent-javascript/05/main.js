import keys from "./keys.json";

function geoFindMe() {
  const status = document.querySelector("#status");
  const mapLink = document.querySelector("#map-link");
  const info = document.querySelector("#info");
  const bug = document.querySelector("#bug");

  mapLink.href = "";
  mapLink.textContent = "";

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = "";
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;

    // we need to display all the position into the info div
    info.innerHTML = `
      <p>Latitude: ${latitude} °</p>
      <p>Longitude: ${longitude} °</p>
      <p>Accuracy: ${position.coords.accuracy} meters</p>
      <p>Altitude: ${position.coords.altitude} meters</p>
      <p>Altitude Accuracy: ${position.coords.altitudeAccuracy} meters</p>
      <p>Heading: ${position.coords.heading} degrees</p>
      <p>Speed: ${position.coords.speed} m/s</p>
    `;
    // display json values on the bug div
    bug.innerHTML = `<pre>${JSON.stringify(position, null, 2)}</pre>`;
    drawTheMap(position);
  }

  async function error(err) {
    console.log(err);
    status.textContent = "Unable to retrieve your location";
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();
    drawTheMap({
      coords: { latitude: data.latitude, longitude: data.longitude },
    });
  }

  if (!navigator.geolocation) {
    status.textContent = "Geolocation is not supported by your browser";
  } else {
    status.textContent = "Locating…";
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    const id = navigator.geolocation.watchPosition(success, error, options);
  }
}

let map;
let myPosition = new mapboxgl.Marker({
  color: "#00ff00",
  draggable: true,
});
function drawTheMap(position) {
  const lng = position.coords.longitude;
  const lat = position.coords.latitude;
  map.panTo([lng, lat], { duration: 3000 });
  map.flyTo({ center: [lng, lat], zoom: 16 });
  // Create a new marker.
  myPosition.setLngLat([lng, lat]).addTo(map);
  const xaixai = new mapboxgl.Marker({ color: "#ff0000", draggable: true })
    .setLngLat([28.00830944084869, -26.177365969565287])
    .addTo(map);
  const bbox = [myPosition.getLngLat(), xaixai.getLngLat()];
  map.fitBounds(bbox, {
    padding: { top: 35, bottom: 25, left: 15, right: 5 },
  });
}
document.addEventListener("DOMContentLoaded", () => {
  mapboxgl.accessToken = keys.mapbox;
  /*
     Xai-Xai: -26.177365969565287, 28.00830944084869
    Latitude: -26.18927511997618 °, Longitude: 28.01035244062295 °
    */
  map = new mapboxgl.Map({
    container: "map", // container ID
    center: [-28.21035244062295, 26.289], // starting position [lng, lat]. Note that lat must be set between -90 and 90
    // style: 'mapbox://styles/mapbox/streets-v11',
    style: "mapbox://styles/mapbox/light-v11",
    zoom: 3, // starting zoom
  });
  map.on("load", () => {
    geoFindMe();
  });
});

