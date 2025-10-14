import  {useMapStore}  from '../store/useMapStore';
import { CheckCircleIcon } from "@heroicons/react/24/outline";


function RouteSummary() {
    const { routeStats } = useMapStore();
    if (!routeStats) return null;

    return (
        <div className=" inset-x-0 pb-6 ">
            {/* //route detail  */}
                    <div className="inset-x-0 bg-white mb-0 mt-3 rounded-5xl lg:min-w-[400px] md:min-w-[350px] lg:inset-y-0">
                        <div className="flex h-15">
                            <CheckCircleIcon className="ml-6 mr-5 mt-6 w-5 h-5 flex-shrink-0 rounded-full text-transparent bg-accent"/>        
                            <div className="pt-5 mr-10 w-full text-xl text-primary font-medium">Route Summary</div> 
                        </div>
                        <div className="flex flex-col pl-16 pt-0 pb-6 p-10">
                            <div className="flex justify-between pt-5">
                                <div className="text-secondary">Distance</div><div className="font-medium">{routeStats.distance} km</div>
                            </div>
                            <div className="flex justify-between pt-5">
                                <div className="text-secondary">Duration</div><div className="font-medium">{routeStats.duration} mins</div>
                            </div>
                            <div className="flex justify-between pt-5">
                                <div className="text-secondary">Elevation Gain</div><div className="font-medium">{routeStats.elevation} m</div>
                            </div>
                        </div>
                    </div>
        </div>

     );
}

export default RouteSummary;