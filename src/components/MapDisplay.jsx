import { MapContainer, TileLayer, Polyline, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useMapStore } from "../store/useMapStore";

export default function MapDisplay() {
  // 🧠 Get data from Zustand store (global state manager)
  const { routeCoords, startPoint, endPoint } = useMapStore();

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md">
      {/* 🗺️ Main Map Container */}
      <MapContainer
        center={[9.03, 38.74]} // default map center (Addis Ababa)
        zoom={13}
        zoomControl={false}
        className="w-full h-full"
      >
        {/* 🧩 Base Map Layer (visual tiles) */}
        {/* theme
                // light theme 
                // url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                // light theme 
                // url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"        
                // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'*/}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {/* 🚴 Route Line (only if route coordinates exist) */}
        {routeCoords?.length > 0 && (
          <Polyline positions={routeCoords} color="#3B82F6" weight={4} />
        )}

        {/* 📍 Markers for start and end points */}
        {startPoint && <Marker position={startPoint} />}
        {endPoint && <Marker position={endPoint} />}
      </MapContainer>

      {/* 🧾 Optional message overlay if no route yet
      {(!startPoint || !endPoint) && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/60 text-gray-600 font-medium">
          Set start and end points to view your route
        </div>
      )} */}
    </div>
  );
}
