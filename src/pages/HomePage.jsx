import SearchLocation from "../components/SearchLocation";


function HomePage() {
    return ( 
        <div className="relative">
            {/* background div */}
        <div className="w-screen h-screen bg-red-200 absolute top-0 left-0 -z-10">
        </div>

            {/* foreground div */}
        <div className="h-20">
            <h1 className="pt-6 pb-6 pl-10 text-2xl">Create Route</h1>
        </div>
        <SearchLocation />


        <div className="h-150 bg-gray-300">

        </div>

{/* // Navigation bar */}
        <div className="h-15 bg-gray-200 m-4 rounded-full flex justify-center items-center">
            {/* <hr className="text-red-500 m-0 w-5 border-1"/> */}
            <div className="mt-5 mb-5 w-5 h-5 text-gray-900 border-l-1"></div>
            <div className="mt-5 mb-5 w-5 h-5 text-gray-900 border-l-1"></div>
            <div className="mt-5 mb-5 w-5 h-5 text-gray-900 border-l-1"></div>
            <div className="mt-5 mb-5 w-5 h-8 text-gray-900 border-l-2"></div> {/* longer ones - middle */}
            <div className="mt-5 mb-5 w-5 h-8 text-gray-900 border-l-2"></div> {/*  longer ones - middle */}
            <div className="mt-5 mb-5 w-5 h-5 text-gray-900 border-l-1"></div>
            <div className="mt-5 mb-5 w-5 h-5 text-gray-900 border-l-1 border-r-1"></div>
        </div>        
        </div>
     );
}

export default HomePage;