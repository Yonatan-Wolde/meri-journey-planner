import SearchLocation from "../components/SearchLocation";
import MapDisplay from "../components/MapDisplay";
import RouteStats from "../components/RouteStats";
import useRouteCalculation from "../hooks/useRouteCalculation";


function HomePage() {
    useRouteCalculation();
    
    return ( 
        <>
        {/* background map */}
        <div className="fixed inset-0 -z-10">
            <MapDisplay />
        </div>


            <header>
                <h1 className="pt-7 mb-6 ml-10 text-xl text-theritiary font-bold sm:block lg:hidden md:hidden">Create Route</h1>
            </header>

            <section className="fixed left-1/2 -translate-x-1/2 w-full max-w-[700px] px-4 z-20 mt-5 lg:mt-25 md:mt-25">
                <SearchLocation />
            </section>

            <section className="absolute top-1/2 left-0 h-1/2 overflow-y-auto inset-x-0 mx-4 rounded-[40px] lg:top-4/7">
                <RouteStats />
            </section>

        </>
     );
}

export default HomePage;