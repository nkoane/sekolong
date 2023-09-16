const filename = './poi.json';

window.addEventListener('load', async () => {
    const data = await fetch(filename);
    const json = await data.json();

    document.title = json.name;

    mapboxgl.accessToken = 'pk.eyJ1IjoibHRkbiIsImEiOiJjbGl1MjM5ODIxc2V6M2tvMWpxNzQxcHF3In0.8RRsebPgocLYzJX1LniMKA';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v11',
        center: [28.008381093090467, -26.177276007735813], // starting position [lng, lat]
        zoom: 19, // starting zoom
    });

    /** we is going to find our location */
    var ourPoiMarker = addPoiToMap(json.poi[0], map);

    navigator.geolocation.getCurrentPosition(
        (position) => {
            console.log('We got your position', position.coords);
            map.flyTo({
                center: [position.coords.longitude, position.coords.latitude],
                zoom: 19,
                essential: true, // this animation is considered essential with respect to prefers-reduced-motion
                speed: 1, // make the flying slow
            });

            var ourPositionMarker = new mapboxgl.Marker({
                color: '#00ff00',
            })
                .setLngLat([position.coords.longitude, position.coords.latitude])
                .addTo(map);

            map.fitBounds(
                [
                    ourPositionMarker.getLngLat().toArray(), // southwestern corner of the bounds
                    ourPoiMarker.getLngLat().toArray(), // northeastern corner of the bounds
                ],
                {
                    padding: 40, // padding in pixels
                }
            );

            let startCoord = ourPositionMarker.getLngLat().toArray().join(',');
            let endCoord = ourPoiMarker.getLngLat().toArray().join(',');
            let navigationURL = `https://api.mapbox.com/directions/v5/mapbox/driving-traffic/${startCoord};${endCoord}`;
            navigationURL += `?access_token=${mapboxgl.accessToken}&geometries=geojson`;

            async function getDirections() {
                const query = await fetch(navigationURL);
                const json = await query.json();
                const data = json.routes[0];

                const route = data.geometry.coordinates;
                const geojson = {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'LineString',
                        coordinates: route,
                    },
                };

                if (map.getSource('route')) {
                    map.getSource('route').setData(geojson);
                }
                // otherwise, we'll make a new request
                else {
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
                // add turn instructions here at the end
            }

            getDirections();
        },
        (error) => {
            console.error('We could not get your position', error);
        }
    );
});

function addPoiToMap(poi, map) {
    const marker = new mapboxgl.Marker({
        color: '#000000',
    })
        .setLngLat([poi.gps.longitude, poi.gps.latitude])
        .addTo(map);

    return marker;
}
