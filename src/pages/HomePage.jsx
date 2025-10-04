import MapComponent from "../components/MapComponent";
import NavigationBar from "../components/NavigationBar";
import SearchLocation from "../components/SearchLocation";


function HomePage() {
    return ( 
        <div className="relative">
                {/* background div */}
            <div className="w-screen h-screen bg-red-200 absolute top-0 left-0 -z-10">
                <MapComponent />
            </div>

                {/* foreground div */}
            <div className="h-20">
                <h1 className="pt-7 pb-6 pl-10 text-xl">Create Route</h1>
            </div>
            <SearchLocation />



    {/* // Navigation bar */}
    <NavigationBar />      
        </div>
     );
}

export default HomePage;