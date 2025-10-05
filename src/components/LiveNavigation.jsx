import { PauseIcon, StopIcon } from "@heroicons/react/24/outline";

function LiveNavigation() {
    return ( 
<div className="absolute inset-x-0 top-140 pb-6">
{/* //route detail  */}
        <div className="inset-x-0 flex bg-white mb-0 mt-3 p-6 pt-0 rounded-5xl justify-between">
            <div className="flex flex-col justify-end items-center pt-5">
                <div className="font-semibold text-xl">25km</div><div className="text-secondary">Distance</div>
            </div>
            <div className="flex flex-col justify-end items-center pt-5">
                <div className="text-6xl font-black">20.5</div><div className="text-secondary">km/h</div>
            </div>
            <div className="flex flex-col justify-end items-center pt-5">
                <div className="font-semibold text-xl">00:00:00</div><div className="text-secondary">Time</div>
            </div>
        </div>
{/* //route button  */}
        <div className="inset-x-0 flex mt-5 mb-0 mt- rounded-5xl justify-between">
            <button className="flex w-full h-15 inset-x-0 bg-gray-300 mb-0 mr-0.5 rounded-l-5xl justify-between">
                <PauseIcon className="ml-6 mr-5 mt-5 w-5 h-5 flex-shrink-0 rounded-full text-primary"/>        
                <div className="pt-4 w-full text-lg text-primary  text-left font-medium">Pause Ride</div> 
            </button>
            <button className="flex w-full h-15 inset-x-0 bg-fire mb-0 ml-0.5 rounded-r-5xl justify-between">
                <StopIcon className="ml-6 mr-5 mt-5 w-5 h-5 flex-shrink-0 rounded-full text-primary"/>        
                <div className="pt-4 w-full text-lg text-white text-left font-medium">End Ride</div> 
            </button>            
        </div>
</div>
     );
}

export default LiveNavigation;