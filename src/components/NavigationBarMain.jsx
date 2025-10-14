import { NavLink } from "react-router-dom";

function NavigationBarMain() {

    return ( 
<>
        <div className="left-1/2 -translate-x-1/2 pl-[50px] pr-[50px] h-15 inset-x-0 mt-5 bg-white text-primary 
                        rounded-full flex justify-center items-center fixed top-0 min-w-2xl max-w-2xl">
            <ul className="flex justify-between items-center w-full p-5 text-base font-medium">
                <li>
                    <NavLink to="/" className={({isActive})=> isActive ? "text-theritiary font-bold" : "text-primary"}>Create Route</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard" className={({isActive})=> isActive ? "text-theritiary font-bold" : "text-primary"}>Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/ridelog" className={({isActive})=> isActive ? "text-theritiary font-bold" : "text-primary"}>RideLog</NavLink>
                </li>
            </ul>
        </div>
</>
     );
}

export default NavigationBarMain;