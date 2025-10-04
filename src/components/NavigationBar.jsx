import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/outline";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

function NavigationBar() {

    const [navBarShrinked, setNavBarShrinked] = useState(true);

<ArrowRightEndOnRectangleIcon />

    return ( 
<>

        {navBarShrinked ? (
            <div className="h-15 w-10 bg-white m-4 mb-6 rounded-full flex justify-center items-center fixed bottom-0"
                onClick={() => (setNavBarShrinked(false))}>
            <ArrowRightEndOnRectangleIcon className="w-8 text-gray-800"/>
            </div>) : (
            <div className="h-15 inset-x-0 m-4 mb-6 bg-white rounded-full flex justify-center items-center fixed bottom-0">
                    <ul className="flex justify-between items-center w-full p-5 text-base">
                        <li><a href="">Home</a></li>
                        <li><a href="">Dashboard</a></li>
                        <li><a href="">RideLog</a></li>
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