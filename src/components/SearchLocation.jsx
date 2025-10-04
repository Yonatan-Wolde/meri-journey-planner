import { StopCircleIcon } from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import RouteProperty from "./RouteProperty";



function SearchLocation() {
    
    //staring location states
    const [startingLocationSearch, setStartingLocationSearch] = useState('');
    const [startingLocationResults, setStartingLocationResults] = useState([]);
    const [startingLocation, setStartingLocation] = useState(null);
    const [showStartingDropdown, setShowStartingDropdown] = useState(false);


    //destination location states
    const [destinationLocationSearch, setDestinationLocationSearch] = useState('');
    const [destinationLocationResults, setDestinationLocationResults] = useState([]);
    const [destinationLocation, setDestinationLocation] = useState(null);
    const [showDestinationDropdown, setShowDestinationDropdown] = useState(false);

    

    
    //fetch starting location Search 
    useEffect(() => {
        if (startingLocationSearch.length > 2) {
            const timeoutId = setTimeout(() => {
                // Use Open-Meteo Geocoding API (CORS-friendly)
                const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(startingLocationSearch)}&count=10&language=en&format=json`;
        
                console.log("🔍 Making API request to:", url);
                
                fetch(url)
                .then((response) => {
                        console.log("📡 Response status:", response.status);
                        if(!response.ok) {
                            throw new Error(`HTTP error!: ${response.status}`);
                        }
                        return response.json();
                    })
                .then((data) => {
                        console.log("✅ API response data:", data);
                        
                        // Open-Meteo returns data in a different format
                        if (data.results && data.results.length > 0) {
                            // Convert Open-Meteo format to our expected format
                            const formattedResults = data.results.map(location => ({
                                display_name: `${location.name}, ${location.admin1 || ''} ${location.country || ''}`.trim(),
                                lat: location.latitude,
                                lon: location.longitude
                            }));
                            console.log("📦 Formatted results:", formattedResults);
                            setStartingLocationResults(formattedResults);
                        } else {
                            console.log("📦 No results found");
                            setStartingLocationResults([]);
                        }
                    })
                .catch((error) => {
                        console.error("❌ Fetch error:", error);
                        setStartingLocationResults([]);
                    });      
                }, 300);

            return () => clearTimeout(timeoutId);
        } else {
            setStartingLocationResults([]);
        }
    }, [startingLocationSearch])


    // Add this useEffect for destination
    useEffect(() => {
        if (destinationLocationSearch.length > 2) {
            const timeoutId = setTimeout(() => {
                const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(destinationLocationSearch)}&count=10&language=en&format=json`;
        
                console.log("🔍 Making Destination API request to:", url);
                
                fetch(url)
                .then((response) => {
                        console.log("📡 Destination response status:", response.status);
                        if(!response.ok) {
                            throw new Error(`HTTP error!: ${response.status}`);
                        }
                        return response.json();
                    })
                .then((data) => {
                        console.log("✅ Destination API response:", data);
                     // convert the api data into better readable format   
                        if (data.results && data.results.length > 0) {
                            const formattedResults = data.results.map(location => ({
                                display_name: `${location.name}, ${location.admin1 || ''} ${location.country || ''}`.trim(),
                                lat: location.latitude,
                                lon: location.longitude
                            }));
                            setDestinationLocationResults(formattedResults);
                        } else {
                            setDestinationLocationResults([]);
                        }
                    })
                .catch((error) => {
                        console.error("❌ Destination fetch error:", error);
                        setDestinationLocationResults([]);
                    });      
                }, 300);

            return () => clearTimeout(timeoutId);
        } else {
            setDestinationLocationResults([]);
        }
    }, [destinationLocationSearch])





    


// console.log(`❌❌❌❌${startingLocation}`)
// console.log(`❌❌❌❌${destinationLocation}`)









    return (
        <>
        <div className="flex flex-col ml-5 mr-5 bg-white rounded-tl-5xl rounded-tr-5xl rounded-bl-5xl rounded-br-5xl">
            

{/* starting location search field div */}
            <div className="relative">
                <div className="flex h-15">
                    <StopCircleIcon className="ml-6 mr-5 mt-6 w-5 h-5 flex-shrink-0 rounded-full text-gray-700"/>                   
                    <input 
                        type="text" 
                        className="pt-2 mr-10 w-full text-placeholder text-base border-b-1  border-gray-200 focus:outline-none" 
                        placeholder="Starting Location"
                        value={startingLocationSearch}
                        onChange={(e)=>{setStartingLocationSearch(e.target.value)}} 
                        onFocus={() => (setShowStartingDropdown(true))}
                        onBlur={() => setTimeout(() => (setShowStartingDropdown(false)), 100)}
                    />
                </div>
                
    {/* starting location search result list dropdown visibility */}
                { showStartingDropdown && (
                    <div className="absolute top-full w-full flex flex-col bg-white rounded-bl-5xl rounded-br-5xl rounded-tl-5xl rounded-tr-5xl z-10">
                        {startingLocationResults.length > 0 ? (
                            startingLocationResults.map((location, index) => (
                                <div
                                    key={index}
                                    id="startingLocation"
                                    className="ml-15 leading-16 mr-10 text-placeholder text-base border-b border-gray-200 cursor-pointer"
                                    onClick={() => {
                                        setStartingLocation(location.display_name);
                                        setStartingLocationSearch(location.display_name);
                                        setShowStartingDropdown(false);
                                    }}
                                >
                                    {location.display_name}
                                </div>
                        ))
                            ) : (
                        <div className="ml-15 leading-16 mr-10 text-placeholder text-base border-b border-gray-200">Type at leaset 3 character</div>
                        )}
                    </div>
                )}
            </div>


{/* destination location search field div */}
            <div className="relative">
                <div className="flex h-15">
                    <MapPinIcon className="ml-6 mr-5 mt-5 w-5 h-5 flex-shrink-0 rounded-full text-gray-700"/>
                    <input 
                        type="text" 
                        className="pt-2 mr-10 w-full text-placeholder text-base border-b-1  border-gray-200 focus:outline-none" 
                        placeholder="Destination Location"
                        value={destinationLocationSearch}
                        onChange={(e)=>{setDestinationLocationSearch(e.target.value)}} 
                        onFocus={() => (setShowDestinationDropdown(true))}
                        onBlur={() => setTimeout(() => (setShowDestinationDropdown(false)), 100)}                        
                    />
                </div>
                
    {/* destination location search result list dropdown visibility */}
                {showDestinationDropdown && (
                    <div className="absolute top-full w-full flex flex-col bg-white rounded-bl-5xl rounded-br-5xl rounded-tl-5xl rounded-tr-5xl z-10">
                        {destinationLocationResults.length > 0 ? (
                            destinationLocationResults.map((location, index) => (
                                <div
                                    key={index}
                                    className="ml-15 leading-16 mr-10 text-placeholder text-base border-b border-gray-200 cursor-pointer"
                                    onClick={() => {
                                        setDestinationLocation(location.display_name);
                                        setDestinationLocationSearch(location.display_name);
                                        setShowDestinationDropdown(false);
                                    }}
                                >
                                    {location.display_name}
                                </div>
                        ))
                            ) : (
                        <div className="ml-15 leading-16 mr-10 text-placeholder text-base border-b border-gray-200">Type at leaset 3 character</div>
                        )}
                    </div>
                )}
            </div>
        </div>


{/* triger route property section/modal */}
{startingLocation && destinationLocation && (<RouteProperty />) }


        </> 
     );
}

export default SearchLocation;