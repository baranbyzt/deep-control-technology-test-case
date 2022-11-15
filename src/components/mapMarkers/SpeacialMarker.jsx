import { Marker } from "react-leaflet";
import { VenueLocationIcon, Vkdsjfsadf } from "./VenueLocationIcon";

const SpeacialMarker = () => {
  return (
    <>
      <Marker key={i} position={venue.geometry} icon={VenueLocationIcon}>
        <MarkerPopup data={venue} />
      </Marker>
    </>
  );
};

export default SpeacialMarker;
