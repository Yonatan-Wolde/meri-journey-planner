import { CheckCircleIcon } from "@heroicons/react/24/outline";


function RouteProperty({startLiveNavigation}) {


    return (
        <div className="relative">
            <div className="absolute inset-x-0 top-100 pb-6">
            {/* //route button  */}
                    <button className="flex h-15 inset-x-0 bg-theritiary mb-0 mt-3 rounded-5xl"
                            onClick={() => (startLiveNavigation(true))}
                    >
                        <CheckCircleIcon className="ml-6 mr-5 mt-5 w-5 h-5 flex-shrink-0 rounded-full text-transparent bg-white"/> 
                        <div className="pt-4 mr-15 w-full text-lg text-white text-center font-medium">Start Ride</div> 
                    </button>

            {/* //route detail  */}
                    <div className="inset-x-0 bg-white mb-0 mt-3 rounded-5xl">
                        <div className="flex h-15">
                            <CheckCircleIcon className="ml-6 mr-5 mt-6 w-5 h-5 flex-shrink-0 rounded-full text-transparent bg-accent"/>        
                            <div className="pt-5 mr-10 w-full text-xl text-primary font-medium">Route Details</div> 
                        </div>
                        <div className="flex flex-col pl-16 pt-0 pb-6 p-10">
                            <div className="flex justify-between pt-5">
                                <div className="text-secondary">Distance</div><div className="font-medium">25km</div>
                            </div>
                            <div className="flex justify-between pt-5">
                                <div className="text-secondary">Estimated Time</div><div className="font-medium">1 hr 30 min</div>
                            </div>
                        </div>
                    </div>

            {/* // route elevation */}
                    <div className="inset-x-0 h-70 bg-white mb-0 mt-3 rounded-5xl">
                        <div className="flex h-15">
                            <CheckCircleIcon className="ml-6 mr-5 mt-6 w-5 h-5 flex-shrink-0 rounded-full text-transparent bg-accent"/>        
                            <div className="pt-5 mr-10 w-full text-xl text-primary font-medium">Altitude Profile</div> 
                        </div>
                    </div>


            {/* //weather  */}
                    <div className="inset-x-0 bg-white mb-0 mt-3 rounded-5xl">
                        <div className="flex h-15">
                            <CheckCircleIcon className="ml-6 mr-5 mt-6 w-5 h-5 flex-shrink-0 rounded-full text-transparent bg-accent"/>        
                            <div className="pt-5 mr-10 w-full text-xl text-primary font-medium">Weather</div> 
                        </div>
                        <div className="flex flex-col pl-16 pt-0 pb-6 p-10">
                            <div className="flex justify-between pt-5">
                                <div className="text-secondary">Temperature</div><div className="font-medium">25 c</div>
                            </div>
                            <div className="flex justify-between pt-5">
                                <div className="text-secondary">Wind</div><div className="font-medium">15 km/h</div>
                            </div>
                            <div className="flex justify-between pt-5">
                                <div className="text-secondary">Precipitation</div><div className="font-medium">10%</div>
                            </div>                
                        </div>
                    </div>
            </div>
</div>

     );
}

export default RouteProperty;