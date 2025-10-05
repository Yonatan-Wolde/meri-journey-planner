import MapComponent from "../components/MapComponent";
import NavigationBar from "../components/NavigationBar";
import SearchLocation from "../components/SearchLocation";


function HomePage() {
    return ( 
        <div className="font-pop mmax-w-4xl px-4">

                {/* background div */}
            <div className="fixed inset-0 -z-10">
                <MapComponent />
            </div>

                {/* foreground div */}
            <div>
                <h1 className="pt-7 mb-6 ml-10 text-xl">Create Route</h1>
                <SearchLocation />
            </div>

        </div>
     );
}

export default HomePage;