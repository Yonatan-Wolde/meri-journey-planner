// import  {useMapStore}  from '../store/useMapStore';
import {CheckCircleIcon} from '@heroicons/react/24/outline';

function Weather() {
    // const { routeStats } = useMapStore();
    // if (!routeStats) return null;


    return (
            <div className=" inset-x-0 pb-6 ">
            {/* //Weather  */}
                    <div className="inset-x-0 bg-white mb-0 mt-3 rounded-5xl lg:min-w-[400px] md:min-w-[350px] shadow-lg">
                        <div className="flex h-15">
                            <CheckCircleIcon className="ml-6 mr-5 mt-6 w-5 h-5 flex-shrink-0 rounded-full text-transparent bg-accent"/>        
                            <div className="pt-5 mr-10 w-full text-xl text-primary font-medium">Weather</div> 
                        </div>
                        <div className="flex justify-between pl-16 pt-0 pb-6 p-10">
                            <div className="flex-col justify-between pt-5">
                                <div className="text-secondary">Temp </div><div className="font-medium">25 c</div>
                            </div>
                            <div className="flex-col  justify-between pt-5">
                                <div className="text-secondary">Wind </div><div className="font-medium">15 km/h</div>
                            </div>
                            <div className="flex-col  justify-between pt-5">
                                <div className="text-secondary">PPT </div><div className="font-medium">5 mm</div>
                            </div>                
                        </div>
                    </div>

            </div>

     );
}

export default Weather;