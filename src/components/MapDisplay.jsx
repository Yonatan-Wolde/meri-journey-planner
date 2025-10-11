import { MapContainer, TileLayer, Polyline, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {useMapStore} from "../store/useMapStore";

export default function MapDisplay() {
    const { routeCoords, startPoint, endPoint } = useMapStore();

    return ( 
      <MapContainer center={[9.03, 38.74]} zoom={13} className="h-full w-full rounded-lg" >
          <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
        // light theme 
        // url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        // light theme 
        // url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"        
        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'              
          />
          {routeCoords.length > 0 && (
            <Polyline positions={routeCoords} color="blue" />
          )}
          {startPoint && <Marker position={startPoint} />}
          {endPoint && <Marker position={endPoint} />}
      </MapContainer>
    );
}

// 🧩 Explanation:

// MapContainer: creates the Leaflet map.

// TileLayer: loads the map background (OpenStreetMap).

// Polyline: draws the route using coordinates.

// Marker: shows start and destination points.

// Zustand store (useMapStore) holds and shares these values across components.