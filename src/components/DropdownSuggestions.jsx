export default function DropdownSuggestions({ data, isLoading, error, onSelect, inputValue  }) {

    
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
                onClick={() => onSelect(place.geometry.coordinates.reverse())}
                >
                {place.properties.label}
            </li>
        ))}
    </ul>
    )}
    </>

);
}