class Location {
  lat;
  lng;
  constructor(lat, lng) {
    this.lat = lat;
    this.lng = lng;
  }
  toString() {
    return `${this.lat},${this.lng}`;
  }
  toArray() {
    return [this.lat, this.lng];
  }
}
const xaixai = new Location(-28.1, 18.4);
const rats = new Location(-28.2, 18.5);

console.log({ xaixai: xaixai.toString(), rats: rats.toArray() });
/*
class PointOfInterest {
     name;
     location;
    constructor(name, lat, lng) {
        this.name = name;
        this.location = new Location( lat, lng );
    }
}

const poi = {
  name: "Xai Xai",
  location: {
    lat: -28.1,
    lng: 18.4,
  },
  toString() {
    return `${this.location.lat},${this.location.lng}`;
  },
  toArray() {
    return [this.location.lat, this.location.lng];
  },
};
console.log({
  poi,
  position: poi.toString(),
  array: poi.toArray(),
});
*/
