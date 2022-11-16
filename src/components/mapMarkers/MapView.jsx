import React, { useState, useEffect } from "react";
import {
  Map,
  TileLayer,
  Circle,
  Polygon,
  Tooltip,
  Polyline,
} from "react-leaflet";
import { useNavigate } from "react-router-dom";
import data from "../../utils/data.json";
import style from "../../style/Map.module.css";
import { VenueMarkers, VenueMarkerSlice } from "./VenueMarkers";
import "leaflet/dist/leaflet.css";
import { useSelector, useDispatch } from "react-redux";
import { getSessionManagment } from "../../store/Session";
import { setSessionManagment } from "../../store/Session";

const MapView = (props) => {
  const getAllValue = useSelector(getSessionManagment);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const [pathDraw, setPathDraw] = useState(true);
  const [locationDraw, setLocationDraw] = useState(true);
  const [state, setState] = useState({
    currentLocation: { lat: 39.906667, lng: 32.899667 },
    zoom: 12,
    data,
  });

  const polyline = [
    [39.932373, 32.80986],
    [39.977982, 32.866909],
    [39.928318, 32.854652],
    [39.92086, 32.85424],
    [39.891132, 32.863182],
  ];

  //  /map path control
  React.useEffect(() => {
    getAllValue ? console.log() : navigate("/");
    return () => {
      dispatch(setSessionManagment(false));
    };
  }, [getAllValue]);

  let pathControl = () => {
    pathDraw ? setPathDraw(false) : setPathDraw(true);
  };
  let locationControl = () => {
    locationDraw ? setLocationDraw(false) : setLocationDraw(true);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.btns}>
          <div onClick={pathControl} className={style.btn}>
            path on/off
          </div>
          <div onClick={locationControl} className={style.btn}>
            locations on/off
          </div>
        </div>
      </div>
      <Map
        className={style.map}
        center={state.currentLocation}
        zoom={state.zoom}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {locationDraw ? (
          <VenueMarkers venues={state.data.venues} />
        ) : (
          <VenueMarkerSlice venues={state.data.venues} />
        )}
        {pathDraw ? <Polyline positions={polyline} color="#000" /> : <p></p>}
      </Map>
    </div>
  );
};

export default MapView;
