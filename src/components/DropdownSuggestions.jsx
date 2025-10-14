import {useMapStore} from '../store/useMapStore';
export default function DropdownSuggestions({ data, isLoading, error, onSelect, inputValue, onSelectOrigin }) {

    const {startPointApiCoords, endPointApiCoords, setStartPointApiCoords, setEndPointApiCoords} = useMapStore();

return (
    <>
    {data == undefined ? (
    <div className="ml-15 h-20 leading-16 mr-10 text-placeholder text-base border-b border-gray-200">
        {inputValue.length < 3 && <p className="p-2 text-gray-300">type at least three character...</p> }
        {isLoading && inputValue.length >= 3 && <p className="p-2 text-gray-500">Searching...</p>}
        {error && inputValue.length >= 3 && <p className="p-2 text-red-400">Error fetching results</p>}
    </div>) :

    (<ul className="flex flex-col bg-white rounded-5xl z-100 overflow-y-auto">
        {data?.map((place) => (
            <li 
                key={place.properties.id}
                className="ml-15 leading-16 mr-10 text-placeholder text-base border-b border-gray-200 cursor-pointer"
                onClick={() => {
                    const lnglat = place.geometry.coordinates;
                    const latlng = [...place.geometry.coordinates].reverse();

                    console.log(`leaflet ${latlng}, ${lnglat}`);

                    onSelectOrigin(lnglat);
                    onSelect(latlng);
                }}
                >
                {place.properties.label}
                {place.geometry.coordinates}
{console.log([startPointApiCoords, endPointApiCoords])}

            </li>
        ))}
    </ul>
    )}
    </>

);
}