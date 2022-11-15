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
import { VenueMarkers, VenueMarkerSlice } from "./VenueMarkers";
import "leaflet/dist/leaflet.css";
import { useSelector, useDispatch } from "react-redux";
import { getSessionManagment } from "../../store/Session";
import { setSessionManagment } from "../../store/Session";

const MapView = (props) => {
  const getAllValue = useSelector(getSessionManagment);
  let dispatch = useDispatch();
  let navigate = useNavigate();
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
  React.useEffect(() => {
    getAllValue ? console.log() : navigate("/");
    return () => {
      dispatch(setSessionManagment(false));
    };
  }, [getAllValue]);

  return (
    <div>
      <Map center={state.currentLocation} zoom={state.zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        <VenueMarkers venues={state.data.venues} />
        <Polyline positions={polyline} color="#000" />
      </Map>
    </div>
  );
};

export default MapView;
