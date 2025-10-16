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

