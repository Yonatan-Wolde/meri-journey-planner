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
            <div className="m-5 h-15 w-12 bg-white mt-5 mb-6 rounded-full flex justify-center items-center fixed bottom-0"
                onClick={() => (setNavBarShrinked(false))}>
            <ArrowRightEndOnRectangleIcon className="w-8 text-gray-800"/>
            </div>) : (
            <div className="m-5 h-15 inset-x-0 mt-5 mb-6 bg-white rounded-full flex justify-center items-center fixed bottom-0">
                    <ul className="flex justify-between items-center w-full p-5 text-base font-medium">
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

                    <button onClick={() => setNavBarShrinked(true)} className="p-4">
                        <ArrowLeftEndOnRectangleIcon className="w-8 text-gray-800" />
                    </button>
            </div>
        )}
        {console.log(navBarShrinked)}
</>
     );
}

export default NavigationBar;