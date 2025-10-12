import SearchLocation from "../components/SearchLocation";
import MapDisplay from "../components/MapDisplay";
import RouteStats from "../components/RouteStats";
import ElevationChart from "../components/ElevationChart";
import { useMapStore } from "../store/useMapStore";
import useRouteCalculation from "../hooks/useRouteCalculation";


function HomePage() {
    useRouteCalculation();
    
    return ( 
        <>
        <main className="font-pop max-w-4xl px-4">
            <header>
                <h1 className="pt-7 mb-6 ml-10 text-xl">Create Route</h1>
            </header>

            <section>
                <SearchLocation />
            </section>

            <section>
                <RouteStats />
                <ElevationChart />
            </section>

            {/* background div */}
            <div className="fixed inset-0 -z-10">
                <MapDisplay />
            </div>


        </main>
        </>
     );
}

export default HomePage;