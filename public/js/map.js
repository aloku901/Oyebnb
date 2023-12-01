mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v12",
  center: [83.1859, 26.0739], // starting position [lng, lat]
  zoom: 9, // starting zoom
});

console.log(coordinates);

const marker = new mapboxgl.Marker()
  .setLngLat(coordinates)
  .addTo(map);
