// src/services/fetchRouteData.js
export async function fetchRouteData(startPointApiCoords, endPointApiCoords) {
  if (!startPointApiCoords || !endPointApiCoords) throw new Error("Both start and end points are required");

  const response = await fetch(
    "https://api.openrouteservice.org/v2/directions/cycling-regular/geojson",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: import.meta.env.VITE_ORS_API_KEY,
      },
      body: JSON.stringify({
        coordinates: [
          startPointApiCoords,
          endPointApiCoords
        ],
        elevation: true,
      }),
    }
  );

  if (!response.ok) throw new Error("Failed to fetch route data");
  return await response.json();
}

        // coordinates: [[8.67998,49.39732],[8.68777,49.40211]],
