import {create} from 'zustand';

export const useMapStore = create((set) => ({
    startPoint: null,
    endPoint: null,
    routeCoords: [],
    routeStats: null,
    elevationData: null,

    setStartPoint: (point) => set({ startPoint: point }),
    setEndPoint: (point) => set({ endPoint: point }),
    setRouteCoords: (coords) => set({ routeCoords: coords }),
    setRouteStats: (stats) => set({ routeStats: stats }),
    setElevationData: (data) => set({ elevationData: data }),
}));  

// 🧩 Explanation:

// This acts like a central brain 🧠 for your map —
// any component can read or update shared data (start point, route, elevation, etc.) without needing props.