Meri App 🚴‍♂️
A modern React-based bike routing and navigation application that helps cyclists plan routes, monitor rides, and track performance metrics.

🚀 Features
📊 Dashboard & Ride Management
Responsive Dashboard: Clean, mobile-friendly interface displaying user information and quick access to features

Ride Log: Comprehensive history of completed rides with detailed statistics

🔍 Smart Location Search
Dynamic Search: Find starting points and destinations using Open-Meteo Geocoding API

Interactive Dropdowns: Real-time search results with autocomplete functionality

Accurate Geocoding: Precise location matching and coordinates

🗺️ Route Planning & Navigation
Route Details: Distance, estimated time, elevation profile, and weather conditions

Live Navigation: Real-time ride tracking with progress monitoring

Ride Controls: Pause and End Ride functionality with session management

🎨 User Interface
Interactive Navigation: Collapsible sidebar with smooth transitions

Map Integration: Leaflet-powered maps with markers and route visualization

Responsive Design: Optimized for desktop, tablet, and mobile devices

🛠️ Technology Stack
Frontend Framework: React 18+

Styling: Tailwind CSS

Routing: React Router DOM

Maps: Leaflet with React-Leaflet

API Integration: Open-Meteo Geocoding API

State Management: React Hooks (useState, useEffect)

Icons: Lucide React

📁 Project Structure
text
src/
├── components/
│   ├── Dashboard.jsx          # Main dashboard with user overview
│   ├── RideLog.jsx           # Ride history and statistics
│   ├── SearchLocation.jsx    # Location search with autocomplete
│   ├── RouteProperty.jsx     # Route details and information
│   ├── LiveNavigation.jsx    # Real-time navigation component
│   ├── NavigationBar.jsx     # Collapsible sidebar navigation
│   └── MapComponent.jsx      # Leaflet map integration
├── App.jsx                   # Main application component
├── index.js                  # Application entry point
└── styles/                   # Global styles and Tailwind imports
🚴‍♂️ Core Components
Dashboard
User profile and quick stats

Recent rides overview

Quick start navigation

SearchLocation
Dual search inputs for start and destination

Real-time API integration

Location validation and suggestions

LiveNavigation
Real-time speed, distance, and time tracking

Interactive ride controls

Progress visualization

MapComponent
Interactive map centered on Addis Ababa

Marker placement for locations

Route drawing capabilities

🎯 Key Functionalities
Location Search

Type-ahead search with debouncing

Coordinate extraction from API responses

Result filtering and ranking

Route Calculation

Distance estimation

Time calculation based on cycling speed

Elevation data processing

Live Tracking

Real-time statistics monitoring

Session persistence

Ride state management

Data Visualization

Map integration with custom markers

Responsive chart displays

Progress indicators

🔄 API Integration
Open-Meteo Geocoding API
Endpoint: https://geocoding-api.open-meteo.com/v1/search

Function: Location search and coordinate lookup

Parameters: Name search, result limit, language

🚦 Getting Started
Prerequisites
Node.js 16+

npm or yarn

Installation
bash
# Clone the repository
git clone [repository-url]

# Install dependencies
npm install

# Start development server
npm run dev
Building for Production
bash
# Create production build
npm run build

# Serve production build
npm run preview
🎨 Styling & Design
Design System: Tailwind CSS with custom configuration

Responsive Breakpoints: Mobile-first approach

Color Scheme: Accessible color palette with proper contrast

Icons: Consistent icon library usage

Animations: Smooth transitions and hover effects

🔮 Future Enhancements
🗺️ Advanced Mapping
Draw actual routes between start and destination points

Elevation profile visualization along routes

Turn-by-turn navigation instructions

🌤️ Weather Integration
Dynamic weather data along the route

Weather-based route recommendations

Real-time weather alerts

📊 Data Management
Persistent ride history storage

Ride statistics and analytics

Export ride data functionality

📱 User Experience
Offline map support

Voice navigation guidance

Social features (share routes, compete with friends)

🔧 Technical Improvements
Progressive Web App (PWA) capabilities

Performance optimization for low-end devices

Enhanced error handling and loading states

🤝 Contributing
Fork the repository

Create a feature branch (git checkout -b feature/amazing-feature)

Commit your changes (git commit -m 'Add some amazing feature')

Push to the branch (git push origin feature/amazing-feature)

Open a Pull Request

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

🐛 Troubleshooting
Common issues and solutions:

Map not loading: Check Leaflet CSS import

API errors: Verify network connectivity and API endpoints

Build errors: Ensure all dependencies are correctly installed