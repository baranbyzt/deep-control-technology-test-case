import L from "leaflet";

export const VenueLocationIcon = (val) =>
  new L.icon({
    iconUrl: require(`../../assets/${val}`),
    iconRetinaUrl: require(`../../assets/${val}`),
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [40, 40],
    className: "leaflet-venue-icon",
  });
