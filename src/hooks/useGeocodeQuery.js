import { useQuery } from '@tanstack/react-query';
import { fetchGeocodeResults } from '../api/geocodeService';

export const useGeocodeQuery = (searchTerm) => {
    return useQuery({
        queryKey: ['geocode', searchTerm],
        queryFn: () => fetchGeocodeResults(searchTerm),
        enabled: !!searchTerm && searchTerm.length > 2,
        staleTime: 30 * 60 * 1000, 
        cacheTime: 30 * 60 * 1000, 
        retry: false, 
        refetchOnWindowFocus: false, 
    });
};

// 🧩 Dissection:

// queryKey: gives React Query a unique identifier for each search term, so it can cache results.

// queryFn: defines how to fetch data (using our API function).

// enabled: ensures the fetch only runs when there’s at least 3 characters typed.

// staleTime: optional caching duration.
//         staleTime: 5 * 60 * 1000, // 5 minutes
//         cacheTime: 30 * 60 * 1000, // 30 minutes
//         retry: 1, // Retry once on failure
//         refetchOnWindowFocus: false, // Do not refetch on window focus

// This hook makes your code clean and reusable — you can use it in any component that needs to fetch location data.
