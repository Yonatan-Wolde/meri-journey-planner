import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/outline";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router-dom";

function NavigationBar() {

    const [navBarShrinked, setNavBarShrinked] = useState(true);

<ArrowRightEndOnRectangleIcon />

    return ( 
<>
        {navBarShrinked ? (
            <div className="mr-5 ml-2 h-15 w-12 bg-theritiary mt-5 mb-6 rounded-full flex justify-center items-center fixed bottom-0 shadow-lg"
                onClick={() => (setNavBarShrinked(false))}>
            <ArrowRightEndOnRectangleIcon className="w-8 text-gray-800 text-white"/>
            </div>) : (
            <div className="ml-2 mr-2 h-15 inset-x-0 mt-5 mb-6 bg-theritiary text-white rounded-full flex justify-center items-center fixed bottom-0 shadow-lg">

                    <button onClick={() => setNavBarShrinked(true)} className="pr-0 p-4">
                        <ArrowLeftEndOnRectangleIcon className="w-8 text-gray-800 text-white" />
                    </button>

                    <ul className="flex justify-between items-center w-full pr-8 p-5 text-base font-medium">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/ridelog">RideLog</Link>
                        </li>
                    </ul>

            </div>
        )}
        {console.log(navBarShrinked)}
</>
     );
}

export default NavigationBar;