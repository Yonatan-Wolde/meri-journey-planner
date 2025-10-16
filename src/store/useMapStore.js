import {create} from 'zustand';

export const useMapStore = create((set) => ({
    startPoint: null,
    endPoint: null,
    startPointApiCoords: null,
    endPointApiCoords: null,
    routeCoords: [],
    routeStats: null,
    elevationData: null,
    startLiveNavigation: false,

    startPointLocationName: '',
    endPointLocationName: '',

    setStartPoint: (point) => set({ startPoint: point }),
    setEndPoint: (point) => set({ endPoint: point }),
    setStartPointApiCoords: (coords) => set({ startPointApiCoords: coords }),
    setEndPointApiCoords: (coords) => set({ endPointApiCoords: coords }),
    setRouteCoords: (coords) => set({ routeCoords: coords }),
    setRouteStats: (stats) => set({ routeStats: stats }),
    setElevationData: (data) => set({ elevationData: data }),
    setStartLiveNavigation: (status) => set({ startLiveNavigation: status}),

    setStartPointLocationName: (name) => set({ startPointLocationName: name }),
    setEndPointLocationName: (name) => set({ endPointLocationName: name }),
}));  

