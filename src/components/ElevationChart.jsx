import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import {useMapStore} from "../store/useMapStore";
import { CheckCircleIcon } from "@heroicons/react/24/outline";


export default function ElevationChart() {
    const { elevationData } = useMapStore();

    if (!elevationData) return null;

    return (
        <div className="">
            <div className=" inset-x-0 pb-6 ">
            {/* //Weather  */}
            <div className="inset-x-0 bg-white mb-0 mt-3 rounded-5xl lg:min-w-[400px] md:min-w-[350px] w-auto h-[350px]">
                <div className="flex h-15">
                    <CheckCircleIcon className="ml-6 mr-5 mt-6 w-5 h-5 flex-shrink-0 rounded-full text-transparent bg-accent"/>        
                    <div className="pt-5 mr-10 w-full text-xl text-primary font-medium">Altitude Profile</div> 
                </div>

                    <ResponsiveContainer width="100%" height="80%">
                        <LineChart data={elevationData}>
                            <XAxis dataKey="distance" unit="km"/>
                            {/* label={{ value: 'Distance (km)', position: 'insideBottomRight', offset: -5 }} */}
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="elevation" stroke="#3881C3" strokeWidth={2} dot={false} />
                    </LineChart>
                </ResponsiveContainer>                

            </div>
            </div>
        </div>


    );
}       

        
