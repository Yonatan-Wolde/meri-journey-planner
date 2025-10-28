import {useMapStore} from '../store/useMapStore';
export default function DropdownSuggestions({ data, isLoading, error, onSelect, inputValue, onSelectOrigin, locationName }) {

    const {startPointApiCoords, endPointApiCoords, setStartPointApiCoords, setEndPointApiCoords, setStartPointLocationName} = useMapStore();

return (
    <>
    {data == undefined ? (
    <div className="ml-15 h-20 leading-16 mr-10 text-placeholder text-base border-b border-gray-200">
        {inputValue.length < 3 && <p className="p-2 text-gray-300">type at least three character...</p> }
        {isLoading && inputValue.length >= 3 && <p className="p-2 text-gray-500">Searching...</p>}
        {error && inputValue.length >= 3 && <p className="p-2 text-red-400">Error fetching results</p>}
    </div>) :

    (<ul className="flex flex-col bg-white rounded-5xl z-100 overflow-y-auto max-h-[70vh] shadow-lg">
        {data?.map((place) => (
            <li 
                key={place.properties.id}
                className="ml-15 leading-16 mr-10 text-placeholder text-base border-b border-gray-200 cursor-pointer
                            hover:scale-105 transition-all ease-in-out duration-300 hover:font-medium"
                onClick={() => {
                    const lnglat = place.geometry.coordinates;
                    const latlng = [...place.geometry.coordinates].reverse();

                    console.log(`leaflet ${latlng}, ${lnglat}`);

                    onSelectOrigin(lnglat);
                    onSelect(latlng);

                    locationName(place.properties.name);
                }}
                >
                    <p className='pt-2 pb-2 leading-loose'>
                {place.properties.name}
                    <span className='font-light text-gray-500'>
                 {place.properties.locality ? `, ${place.properties.locality}` : ''}
                {place.properties.country ? `, ${place.properties.country}` : ''}
                    </span>
                    </p>
            </li>
        ))}
    </ul>
    )}
    </>

);
}