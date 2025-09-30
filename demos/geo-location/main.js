document.addEventListener("DOMContentLoaded", async function () {
  const config = await fetch("config.json").then((res) => res.json());
  mapboxgl.accessToken = config.accessToken;
  const map = new mapboxgl.Map({
    container: "map", // container ID
    center: [-74.5, 40], // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 9, // starting zoom
  });
  // Set marker options.
  let ourLocation = {
    coords: { latitude: 0, longitude: 0 },
    marker: new mapboxgl.Marker({
      color: "#FF0000",
      draggable: true,
    }),
  };

  let transport = new mapboxgl.Marker({
    color: "#00FF00",
    draggable: true,
  })
    .setLngLat([28.002200488435474, -26.181256412869153])
    .addTo(map);

  let bounds = [];
  navigator.geolocation.getCurrentPosition(function (position) {
    ourLocation.coords = position.coords;
    map.flyTo({
      center: [ourLocation.coords.longitude, ourLocation.coords.latitude],
      zoom: 14,
    });
    ourLocation.marker.setLngLat([
      ourLocation.coords.longitude,
      ourLocation.coords.latitude,
    ]);
    ourLocation.marker.addTo(map);

    ourLocation.marker.on("dragend", function (e) {
      getDirections(
        ourLocation.marker.getLngLat().toArray().join(","),
        transport.getLngLat().toArray().join(","),
      );
    });

    transport.on("dragend", function (e) {
      getDirections(
        ourLocation.marker.getLngLat().toArray().join(","),
        transport.getLngLat().toArray().join(","),
      );
    });
    // Define bounds that conform to the `LngLatBoundsLike` object.
    bounds = [ourLocation.marker.getLngLat(), transport.getLngLat()];
    // Set the map's max bounds.
    map.setMaxBounds(bounds);
    getDirections(
      ourLocation.marker.getLngLat().toArray().join(","),
      transport.getLngLat().toArray().join(","),
    );
  });

  function getDirectionsUrl(start, end) {
    // https://api.mapbox.com/directions/v5/mapbox/driving/-84.518641,39.134270;-84.512023,39.102779?geometries=geojson&access_token=pk.eyJ1IjoibHRkbiIsImEiOiJjbWc1emNxMW4wOXcwMmpzN2owZW5sdmZqIn0.oLjTm8sGy-YKJnrky9U4Bw
    const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${start};${end}?geometries=geojson&access_token=${config.accessToken}`;
    return url;
  }
  async function getDirections(start, end) {
    const url = getDirectionsUrl(start, end);
    const query = await fetch(url);
    const json = await query.json();
    const data = json.routes[0];
    const route = data.geometry;
    const geojson = {
      type: "Feature",
      properties: {},
      geometry: data.geometry,
    };
    if (map.getSource("route")) {
      // if the route already exists on the map, reset it using setData
      map.getSource("route").setData(geojson);
    }

    // otherwise, add a new layer using this data
    else {
      map.addLayer({
        id: "route",
        type: "line",
        source: {
          type: "geojson",
          data: geojson,
        },
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#000000",
          "line-width": 5,
          "line-opacity": 0.75,
        },
      });
    }
  }
});
