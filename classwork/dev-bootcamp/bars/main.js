document.addEventListener('DOMContentLoaded', () => {
  const mapboxAccessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
  if (!mapboxAccessToken) {
    console.error('Mapbox access token is not set in the environment variables.');
    return;
  }
  mapboxgl.accessToken = mapboxAccessToken;

  const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 11, // starting zoom
  });

  const pointsOfInterest = [
    {
      name: 'Xai Xai Lounge',
      coords: [28.008352356150063, -26.17734671179048],
      colour: 'orange',
    },
    {
      name: 'Pirates Sports Bar',
      coords: [28.015637348613403, -26.145170331456335],
      colour: '#ffff88',
    },
    {
      name: 'Mikes Heritage House',
      coords: [28.035481588007794, -26.182581421364823],
      colour: '#88ffff',
    },
  ];

  const start = new mapboxgl.Marker({ color: 'green', draggable: true });
  let end = null;
  new mapboxgl.Marker({ color: 'red' });

  start.on('dragend', () => {
    if (end != null) {
      getDirection(start.getLngLat(), end.getLngLat());
    }
  });

  // .setPopup(new mapboxgl.Popup().setHTML(`<h1>${point.name}</h1>`))
  // -26.18964676672448, 28.013312991465877

  async function setCurrentPosition(lng, lat) {
    start.setLngLat([lng, lat]).addTo(map);
    map.setCenter([lng, lat]);

    /*    map.flyTo({
      center: marker.getLngLat(),
      zoom: 12,
    });
    */

    pointsOfInterest.forEach((point, index) => {
      point.marker = new mapboxgl.Marker({ color: point.colour })
        .setLngLat(point.coords)
        // .setPopup(new mapboxgl.Popup().setHTML(`<h1>${point.name}</h1>`))
        .addTo(map);

      point.marker.getElement().addEventListener('click', () => {
        const boundingBox = new mapboxgl.LngLatBounds(start.getLngLat(), map.getCenter());
        boundingBox.extend(point.marker.getLngLat());
        map.fitBounds(boundingBox, { padding: 50 });
        end = point.marker;
        getDirection(start.getLngLat(), end.getLngLat());
      });
    });
  }

  function success(location) {
    setCurrentPosition(location.coords.longitude, location.coords.latitude);
  }

  function error() {
    setCurrentPosition(28.013312991465877, -26.18964676672448);
  }

  navigator.geolocation.getCurrentPosition(success, error);

  async function getDirection(start, end) {
    const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${start.toArray().join(',')};${end
      .toArray()
      .join(',')}?steps=true&geometries=geojson&access_token=${mapboxAccessToken}`;
    try {
      const response = await fetch(url);

      const data = await response.json();
      const steps = data.routes[0].legs[0].steps;
      const details = document.getElementById('details');
      const ol = document.createElement('ol');
      steps.forEach((step) => {
        const li = document.createElement('li');
        li.textContent = step.maneuver.instruction;
        ol.appendChild(li);
      });
      details.innerHTML = ol.outerHTML;
      const route = data.routes[0].geometry.coordinates;
      const geojson = {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: route,
        },
      };
      // if the route already exists on the map, we'll reset it using setData
      if (map.getSource('route')) {
        map.getSource('route').setData(geojson);
      } else {
        map.addLayer({
          id: 'route',
          type: 'line',
          source: {
            type: 'geojson',
            data: geojson,
          },
          layout: {
            'line-join': 'round',
            'line-cap': 'round',
          },
          paint: {
            'line-color': '#3887be',
            'line-width': 5,
            'line-opacity': 0.75,
          },
        });
      }
    } catch (error) {
      console.error('error', error);
    }
  }
});
