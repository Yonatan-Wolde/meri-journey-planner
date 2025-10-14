import { useEffect } from "react";
import { useMapStore } from "../store/useMapStore";
import { fetchRouteData } from "../api/fetchRouteData";
import { processRouteData } from "../utils/processRouteData";

export default function useRouteCalculation() {
  const { startPoint, endPoint, startPointApiCoords, endPointApiCoords, setRouteCoords, setRouteStats, setElevationData } =
    useMapStore();

  useEffect(() => {
    if (!endPointApiCoords || !endPointApiCoords) return;

    async function calculate() {
      try {
        const rawData = await fetchRouteData(startPointApiCoords, endPointApiCoords);
        const { routeCoords, routeStats, elevationData } = processRouteData(rawData);

        setRouteCoords(routeCoords);
        setRouteStats(routeStats);
        setElevationData(elevationData);
      } catch (err) {
        console.error("Route calculation failed:", err);
      }
    }

    calculate();
  }, [startPoint, endPoint, startPointApiCoords, endPointApiCoords, setRouteCoords, setRouteStats, setElevationData]);
}
