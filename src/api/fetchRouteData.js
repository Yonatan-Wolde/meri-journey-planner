// src/services/fetchRouteData.js
export async function fetchRouteData(startPoint, endPoint) {
  if (!startPoint || !endPoint) throw new Error("Both start and end points are required");

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
          [startPoint.lng, startPoint.lat],
          [endPoint.lng, endPoint.lat],
        ],
        elevation: true,
      }),
    }
  );

  if (!response.ok) throw new Error("Failed to fetch route data");
  return await response.json();
}
