import { useState } from "react";
import { useGeocodeQuery } from "../hooks/useGeocodeQuery";
import { useMapStore } from "../store/useMapStore";
import useDebounce from "../hooks/useDebounce";
import { StopCircleIcon } from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/outline";
import DropdownSuggestions from "./DropdownSuggestions";


export default function SearchLocation() {
    const [startInput, setStartInput] = useState("");
    const [destInput, setDestInput] = useState("");

    const debouncedStart = useDebounce(startInput, 600);
    const debouncedDest = useDebounce(destInput, 600);

    const {data: startData, isLoading: startLoading, error: startError} = useGeocodeQuery(debouncedStart);
    const {data: destData, isLoading: destLoading, error: destError} = useGeocodeQuery(debouncedDest);

    const {setStartPoint, setEndPoint, startPointLocationName, endPointLocationName, setStartPointLocationName, setEndPointLocationName} = useMapStore();
    const {startPointApiCoords, endPointApiCoords, setStartPointApiCoords, setEndPointApiCoords} = useMapStore();
    

    const [activeInput, setActiveInput] = useState(null);

console.log(startPointApiCoords, endPointApiCoords)

    return (

        <>
        <div className="flex flex-col bg-white rounded-5xl">
            {/* starting location search field div */}
            <div className="relative">
                <div className="flex h-15">
                    <StopCircleIcon className="ml-6 mr-5 mt-5 w-6 h-6 flex-shrink-0 rounded-full text-accent"/>              
                <input
                    type="text"
                    className="pt-1 mr-10 w-full placeholder-gray-400 text-primary text-base border-b-1  border-gray-200 focus:outline-none"
                    value={startPointLocationName? startPointLocationName : startInput}
                    onChange={(e) => setStartInput(e.target.value)}
                    onFocus={() => setActiveInput('start')}
                    onBlur={() => setTimeout(() => (setActiveInput(null)), 100)}                
                    placeholder="Enter Starting location..."
                    />
                </div>
            </div>


            {/* destination location search field div */}
            <div className="relative">
                { activeInput !== 'start' && (
                <div className="flex h-15">
                    <MapPinIcon className="ml-6 mr-5 mt-4 w-6 h-6 flex-shrink-0 rounded-full text-accent"/>
                    <input
                        type="text"
                        className="pt-1 mr-10 w-full placeholder-gray-400 text-primary text-base border-b-1  border-gray-200 focus:outline-none"
                        value={endPointLocationName? endPointLocationName : destInput}
                        onChange={(e) => setDestInput(e.target.value)}
                        onFocus={() => setActiveInput('dest')}
                        onBlur={() => setTimeout(() => (setActiveInput(null)), 100)}  
                        placeholder="Destination location"
                    />
                </div>
                )}
            </div>    

            {/* destination location search result list dropdown visibility */}
            { activeInput && (                    
                <DropdownSuggestions
                    inputValue={activeInput === 'start' ? startInput : destInput}
                    data={activeInput === 'start' ? startData : destData}
                    isLoading={activeInput === 'start' ? startLoading : destLoading}
                    error={activeInput === 'start' ? startError : destError}
                    onSelect={(coords) => activeInput === 'start' ? setStartPoint(coords) : setEndPoint(coords)}
                    onSelectOrigin={(coords) => activeInput === 'start' ? setStartPointApiCoords(coords) : setEndPointApiCoords(coords)}
                    locationName={(name) => activeInput === 'start' ? setStartPointLocationName(name) : setEndPointLocationName(name)}
                />
            )}
        </div>
        </>
        
    );
}
