import  {useMapStore}  from '../store/useMapStore';

export default function RouteStats() {
    const { routeStats } = useMapStore();

    if (!routeStats) return null;

    return (
        <div className='bg-white p-4 rounded-xl shadow-md mt-4'>
            <h3 className='font-semibold text-lg mb-2'>Route Summary</h3>
            <p><strong>Distance:</strong> {routeStats.distance} km</p>
            <p><strong>Duration:</strong> {routeStats.duration} mins</p>
            <p><strong>Elevation Gain:</strong> {routeStats.elevation} m</p>
        </div>
    );
}   