<h1 align="center">🚴‍♀️ መሪ (Meri) — Bicycle Journey Planner 🗺️</h1>
<p align="center">A modern React application for cyclists to plan routes, monitor live rides, and track performance.</p>

<p align="center">
  <a href="#license">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" alt="License"/>
  </a>
  <img src="https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge&logo=github" alt="Project Status"/>
  <img src="https://img.shields.io/github/stars/Yonatan-Wolde/meri-journey-planner?style=for-the-badge&color=ffd700" alt="GitHub Stars"/>
  <img src="https://img.shields.io/github/forks/Yonatan-Wolde/meri-journey-planner?style=for-the-badge" alt="Forks"/>
  <img src="https://img.shields.io/badge/Version-1.0.0-informational?style=for-the-badge" alt="Version"/>
</p>


**መሪ (Meri)** — Amharic for “path leader” or “route guide” — is a web-based bicycle journey planner and tracker. It helps cyclists plan trips, visualize routes, see elevation and distance, and review ride data effortlessly.

> The full name of the app is **ጉዞ መሪ (Guzo Meri)**, meaning "Journey Leader" in Amharic.

---

## 🌟 Inspiration

After buying a bicycle, I often wondered about the route ahead:
- How steep would it be?
- How long would it take?
- How much effort would it require?

Tracking distance, time, and elevation manually was cumbersome. Meri solves this by providing a complete solution for planning, tracking, and analyzing bicycle journeys — making every ride more informed and data-driven. it is still growing and this is the working in progres versino


---

## 🎥 Demo

![Demo Screenshot](https://raw.githubusercontent.com/Yonatan-Wolde/meri-journey-planner/main/public/meri-demo.PNG)
*Visualize your ride with interactive maps and charts.*

---

## 🚀 Features

- 🔍 Autocomplete search for start and destination
- 🗺️ Interactive map with bicycle route display
- 📏 Route metrics: distance, duration, elevation gain
- 📈 Altitude profile with interactive charts
- 📱 Responsive and user-friendly interface

---

## 🛠️ Tech Stack

| Technology     | Purpose                        |
|----------------|--------------------------------|
| React.js       | Frontend framework             |
| Zustand        | State management               |
| React Query    | Data fetching & caching        |
| Leaflet        | Interactive maps               |
| Recharts       | Elevation charts               |
| Tailwind CSS   | Styling                        |

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Yonatan-Wolde/meri-journey-planner.git

# Navigate into the project folder
cd meri-journey-planner

# Install dependencies
npm install

```

---

# Create a .env file at the root of the project and add your OpenRouteService API key from (https://account.heigit.org/login)
VITE_ORS_API_KEY=your_api_key_here

```bash
# Start the development server:
npm run dev

# Open http://localhost:5173 in your browser.
```

---

## 🧭 Usage

- Enter your starting point and destination

- Select suggestions from the dropdown

- View route, distance, duration, and elevation profile

- Start your ride with live navigation (optional)

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

---

## 📄 License

This project is open-source and available under the MIT License.
