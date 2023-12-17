import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

function MainPageMap() {
  const olsztynCoordinates = [53.808052367799235, 20.40344464232809];

  return (
    <MapContainer center={olsztynCoordinates} zoom={16} style={{ width: "100%", height: "400px", marginBottom: "100px" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={olsztynCoordinates}>
        <Popup>
          Sokola 4, 11-041 Olsztyn
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MainPageMap;