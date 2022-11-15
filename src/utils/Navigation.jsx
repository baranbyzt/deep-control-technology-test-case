import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MapView from "../components/mapMarkers/MapView";
import Authentication from "../components/authentication";
import { useNavigate } from "react-router-dom";
import React from "react";

const Navigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/map" element={<MapView />} />
      </Routes>
    </Router>
  );
};

export default Navigation;

let ErrorPage = () => {
  let navigate = useNavigate();
  React.useEffect(() => {
    navigate("/");
  });
  return <div>404</div>;
};
