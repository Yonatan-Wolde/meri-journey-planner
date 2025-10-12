
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

// 🧩 Dissection (explained in your preferred way):

// export const fetchGeocodeResults = async (searchTerm) => { ... }

// This creates and exports a function that can be imported elsewhere.

// It’s marked async (asynchronous) because we’ll use await to wait for the fetch call to complete.

// The function takes one parameter — searchTerm, which is the text typed by the user.

// const url = ...

// Builds the API URL dynamically, inserting your API key and user’s search text.

// encodeURIComponent() safely prepares any text (e.g. “Addis Ababa”) for a web URL.

// const response = await fetch(url)

// Actually sends the network request to ORS’s geocoding service and waits for the response.

// if (!response.ok)    

// Checks if the server responded successfully (status 200).

// If not, throws an error so React Query knows the request failed.

// const data = await response.json()   

// Converts the raw network response into usable JavaScript data.

// return data.features

// Returns only the useful part of the result (the list of location matches).