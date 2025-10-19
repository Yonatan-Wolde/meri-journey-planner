import  {useMapStore}  from '../store/useMapStore';
import { RocketLaunchIcon } from "@heroicons/react/24/outline";

import RouteSummary from './RouteSummary';
import ElevationChart from './ElevationChart';
import Weather from './Weather';

function RouteStats() {
    const { routeStats, setStartLiveNavigation} = useMapStore();
  

    return (
        <div className="relative">
            <div className="absolute inset-x-0 pb-6 lg:p-3 overflow-y-auto flex-col justify-center">
                
            {/* //route button  */}
            {routeStats ? (
                <button className="flex h-15 inset-x-0 bg-theritiary mb-0 mt-3 rounded-5xl shadow-lg 
                                    hover:scale-104 transition-all duration-300"
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
                            <div className='hover:scale-105 transition-all duration-300'>
                                <RouteSummary />
                            </div>


                            {/* // route elevation */}
                            <div className='hover:scale-105 transition-all duration-300'>
                                <ElevationChart />
                            </div>


                            {/* //weather  */}
                            <div className='hover:scale-105 transition-all duration-300'>
                                <Weather />
                            </div>
                </div>
            </div>
        </div>

     );
}

export default RouteStats;