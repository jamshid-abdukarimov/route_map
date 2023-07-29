import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";
import polyline from "polyline";

const MapView = () => {
  const routes = useSelector((state) => state.routes);
  const selectedRoute = useSelector((state) => state.selectedRoute);
  const polylineString = useSelector((state) => state.polyline);
  const mapRef = useRef(null);
  const [polylines, setPolylines] = useState([]);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = L.map(mapRef.current);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
      map
    );

    polylines.forEach((polyline) => map.removeLayer(polyline));
    markers.forEach((marker) => map.removeLayer(marker));

    setPolylines([]);
    setMarkers([]);
    if (selectedRoute !== null && polylineString) {
      const route = routes[selectedRoute];

      const decodedPolyline = polyline.decode(polylineString);

      const latLngs = decodedPolyline.map((coords) =>
        L.latLng(coords[0], coords[1])
      );
      const polyLine = L.polyline(latLngs, { color: "blue" }).addTo(map);
      setPolylines([polyLine]);

      route.forEach((point) => {
        const marker = L.marker(point).addTo(map);
        setMarkers((prevMarkers) => [...prevMarkers, marker]);
      });

      map.fitBounds(polyLine.getBounds());
    }

    return () => {
      map.remove();
    };
  }, [routes, selectedRoute, polylineString]);

  return (
    <div
      className="map-container"
      ref={mapRef}
      style={{ height: "500px", width: "100%" }}
    ></div>
  );
};

export default MapView;
