import React from "react";
import { Marker } from "react-leaflet";
import { VenueLocationIcon } from "./VenueLocationIcon";
import MarkerPopup from "./MarkerPopup";

export const VenueMarkers = (props) => {
  const { venues } = props;

  const markers = venues.map((venue, i) => (
    <Marker
      key={i}
      position={venue.geometry}
      icon={VenueLocationIcon(venue.image)}
    >
      <MarkerPopup data={venue} />
    </Marker>
  ));

  return <>{markers}</>;
};
