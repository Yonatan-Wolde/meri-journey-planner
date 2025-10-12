// calculate total elevation gain

export function calculateElevationGain(coords) {
    let totalElevationGain = 0;
    for (let i = 1; i < coords.length; i++) {
        const elevationDiff = coords[i][2] - coords[i - 1][2];
        if (elevationDiff > 0) totalElevationGain += elevationDiff;
    }
    return Math.round(totalElevationGain)
}   
