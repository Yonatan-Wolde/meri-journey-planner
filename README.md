Meri App 🚴‍♂️

Meri App is a React + Tailwind CSS frontend project that provides a bike routing and navigation experience. Users can search for starting and destination locations, view route details, monitor live ride stats, and check weather and altitude information along the route.

Features

Responsive Dashboard & Ride Log Pages
Clean and mobile-friendly layouts to display user information and ride history.

Dynamic Location Search

Search starting and destination locations using the Open-Meteo Geocoding API.

Interactive dropdowns display matching results.

Route Details & Live Navigation

View route details including distance, estimated time, altitude, and weather.

Live navigation component shows real-time ride stats with Pause and End Ride buttons.

Interactive Navigation Bar
Shrinkable/expandable navigation bar using React state hooks and react-router-dom for routing.

Map Integration with Leaflet
Displays a map centered on Addis Ababa with markers for starting location.

Project Structure
src/
├─ components/
│  ├─ Dashboard.jsx
│  ├─ RideLog.jsx
│  ├─ SearchLocation.jsx
│  ├─ RouteProperty.jsx
│  ├─ LiveNavigation.jsx
│  ├─ NavigationBar.jsx
│  └─ MapComponent.jsx
├─ App.jsx
├─ index.js
└─ styles/

Technologies Used

React — Frontend library for building UI components.

Tailwind CSS — Utility-first CSS framework for styling.

React Router DOM — Navigation between pages.

Leaflet — Interactive maps.

Open-Meteo Geocoding API — Location search data.

Heroicons — SVG icons for UI components.

Getting Started

Clone the repository

git clone <your-repo-url>
cd meri-app


Install dependencies

npm install


Run the app

npm start


The app will run locally at http://localhost:3000
.

Next Steps / TODO

Draw the route between starting and destination points on the map.

Fetch dynamic weather and altitude data along the route.

Save ride history in RideLog.

Further UI/UX improvements and responsiveness testing.

License

This project is open-source and available for learning purposes.