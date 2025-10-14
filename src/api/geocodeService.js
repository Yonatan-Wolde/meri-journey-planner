
export const fetchGeocodeResults = async (searchTerm) => {
    const apiKey = import.meta.env.VITE_ORS_API_KEY;

    const url = `https://api.openrouteservice.org/geocode/autocomplete?api_key=${apiKey}&text=${encodeURIComponent(searchTerm)}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Geocoding request failed');
    }
    const data = await response.json();
    return data.features;
};
