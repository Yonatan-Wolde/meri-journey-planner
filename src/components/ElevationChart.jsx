import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import {useMapStore} from "../store/useMapStore";

export default function ElevationChart() {
    const { elevationData } = useMapStore();

    if (!elevationData) return null;

    return (
        <div className="bg-white p-4 rounded-xl shadow-md mt-4  h-[300px]">
            <h3 className="font-semibold text-lg mb-2">Elevation Profile</h3>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={elevationData}>
                    <XAxis dataKey="distance" />
                        {/* label={{ value: 'Distance (km)', position: 'insideBottomRight', offset: -5 }} */}
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="elevation" stroke="#8884d8" strokeWidth={2} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}       

