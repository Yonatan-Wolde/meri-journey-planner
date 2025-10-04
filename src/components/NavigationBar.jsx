import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/outline";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

function NavigationBar() {

    const [navBarShrinked, setNavBarShrinked] = useState(true);

<ArrowRightEndOnRectangleIcon />

    return ( 
<>

        {navBarShrinked ? (
            <div className="h-15 w-10 bg-white m-4 rounded-full flex justify-center items-center"
                onClick={() => (setNavBarShrinked(false))}>
            <ArrowRightEndOnRectangleIcon className="w-8 text-gray-900"/>
            </div>) : (
            <div className="h-15 bg-white m-4 rounded-full flex justify-center items-center flex-nowrap">
                    <ul className="flex justify-between items-center w-full p-5">
                        <li><a href="" className="p-1">Home</a></li>
                        <li><a href="" className="p-1">Dashboard</a></li>
                        <li><a href="" className="p-1">RideLog</a></li>
                    </ul>
                    <button onClick={() => setNavBarShrinked(true)} className="p-4">
                                <ArrowLeftEndOnRectangleIcon className="w-8 text-gray-900" />
                    </button>
            </div>
        )}
        {console.log(navBarShrinked)}
</>
     );
}

export default NavigationBar;