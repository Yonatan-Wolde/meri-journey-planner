import { useState } from "react";



function SearchLocation() {

    const [startingLocation, setStartingLocation] = useState('');
    const [SearchResultDropdownVisibility, setSearchResultDropdownVisibility] = useState(true);


    const locations = ['piassa', 'mexico', 'bole', 'ayat', 'saris','4 killo','5 killo','6 killo']
    const locationResults = locations.filter((location)=>(location.toLowerCase().includes(startingLocation.toLowerCase())))





console.log(locationResults)

    return (
        <>
        <form action="" className="flex flex-col ml-5 mr-5 bg-white rounded-tl-5xl rounded-tr-5xl rounded-bl-5xl rounded-br-5xl">
            
            <div className="relative">
                   {/* starting location search field div */}
                <div className="flex h-15">
                    <div className="ml-6 mr-5 mt-6 w-4 h-4 flex-shrink-0 rounded-full border-gray-500 border-2"></div>
                    <input 
                        type="text" 
                        className="pt-2 mr-10 w-full text-placeholder text-md border-b-1  border-gray-200 focus:outline-none" 
                        placeholder="Starting Location"
                        value={startingLocation}
                        onChange={(e)=>{setStartingLocation(e.target.value)
                                        setSearchResultDropdownVisibility(true);
                                      }}
                    />
                </div>
                
                   {/* starting location search result list dropdown visibility */}
                {startingLocation.length > 0 && SearchResultDropdownVisibility && (

                    <div className="absolute top-full w-full flex flex-col bg-white rounded-bl-5xl rounded-br-5xl z-10">
                        <ul>                            
                            {locationResults.map((locationResult, index)=>(
                                <li 
                                    key={index}
                                    onClick={()=>{setStartingLocation(locationResult);
                                        setSearchResultDropdownVisibility(false);
                                    }}
                                    className="ml-15 leading-16 mr-10 text-placeholder text-md border-b border-gray-200 cursor-pointer">{locationResult}</li>
                            ))}
                        </ul>
                    </div>
                )}

            </div>

                   {/* destination search field div */}
            <div className="flex h-15">
                <div className="ml-6 mr-5 mt-5 w-4 h-4 flex-shrink-0 rounded-full border-gray-500 border-2"></div>
                <input 
                    type="text" 
                    className="pb-1 text-placeholder text-md focus:outline-none" 
                    placeholder="Starting Point"/>
            </div>           

               

        </form>
        </> 
     );
}

export default SearchLocation;