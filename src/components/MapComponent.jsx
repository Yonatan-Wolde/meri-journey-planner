// MapComponent.jsx

// LINE 1-2: Importing what we need
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// LINE 4-6: Creating our component function
function MapComponent() {
  // LINE 7-8: Setting up our starting position
  const position = [9.03, 38.74]; // [latitude, longitude] for Addis Ababa
  
  // LINE 10-28: What the component will display (the RETURN statement)
  return (
    // LINE 11-15: The main map container
    <MapContainer 
      center={position}     // Where the map starts looking
      zoom={13}            // How close/zoomed in we start
      style={{ height: '100%', width: '100%' }} // Making the map visible
    >
      
      {/* LINE 17-21: The map background images */}
      <TileLayer
        original map theme
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        // light theme 
        // url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        // light theme 
        // url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"        
        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      
      {/* LINE 23-27: A pin/marker on the map */}
      <Marker position={position}>
        <Popup>
          Hello from Meri! <br /> Your journey starts here.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

// LINE 31: Making this component available to other files
export default MapComponent;