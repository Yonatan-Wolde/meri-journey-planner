import { calculateElevationGain } from "./calculateElevationGain";

export function processRouteData(data) {
    const coords = data.features[0].geometry.coordinates;

    //convert for leaflet
    const routeCoords = coords.map(([lng, lat]) => [lat, lng]);

    const totalDistance = data.features[0].properties.summary.distance / 1000; // in km
    const totalDuration = data.features[0].properties.summary.duration / 60; // in mins


    //build elevation points for chart data
    const elevationData = coords.map((coord, index) => ({
        distance: (index * totalDistance) / coords.length,
        elevation: coord[2],
    }));

    const totalElevationGain = calculateElevationGain(coords);

    return {
        routeCoords,
        routeStats: {
            distance: totalDistance.toFixed(2),
            duration: totalDuration.toFixed(1),
            elevation: totalElevationGain
        },
        elevationData,
    };
}