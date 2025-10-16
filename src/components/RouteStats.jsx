import  {useMapStore}  from '../store/useMapStore';
import { RocketLaunchIcon } from "@heroicons/react/24/outline";

import RouteSummary from './RouteSummary';
import ElevationChart from './ElevationChart';
import Weather from './Weather';

function RouteStats() {
    const { routeStats, startPointApiCoords, endPointApiCoords, setStartLiveNavigation} = useMapStore();
    // if (!routeStats) return null;


    return (
        <div className="relative">
            <div className="absolute inset-x-0 pb-6 ">
                
            {/* //route button  */}
            {startPointApiCoords && endPointApiCoords ? (
                <button className="flex h-15 inset-x-0 bg-theritiary mb-0 mt-3 rounded-5xl"
                        onClick={() => (setStartLiveNavigation(true))}
                >
                    <RocketLaunchIcon className="ml-6 mr-5 mt-5 w-5 h-5 flex-shrink-0 text-white"/> 
                    <div className="pt-4 mr-15 w-full text-lg text-white text-center font-medium">Start Ride</div> 
                </button>
            ): null}
        
                {/* //route stats  */}

                <div className="lg:flex lg:flex-wrap lg:items-start lg:justify-start lg:gap-x-[50px] lg:gap-y-[25px]
                                md:flex md:flex-wrap md:items-start md:justify-start md:gap-x-[50px] md:gap-y-[25px]"
                >

                            {/* //route detail  */}
                                <RouteSummary />


                            {/* // route elevation */}
                                <ElevationChart />


                            {/* //weather  */}
                                <Weather />
                </div>
            </div>
        </div>

     );
}

export default RouteStats;