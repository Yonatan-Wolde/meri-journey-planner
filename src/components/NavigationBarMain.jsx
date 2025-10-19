import { NavLink } from "react-router-dom";

function NavigationBarMain() {

    return ( 
<>
        <div className=" pl-[50px] pr-[50px] h-15 inset-x-0 mt-5 m-5 bg-white/80 text-primary shadow-lg 
                        rounded-full flex justify-center items-center fixed top-0 min-w-2xl w-auto">
            <div className="font-black text-3xl text-primary whitespace-nowrap pl-8 pr-8 p-4 hover:bg-gray-100 hover:text-theritiary font-bold hover:border-l-2 hover:border-r-2 hover:border-accent hover:scale-110 transition-all duration-300">Mer<span className="text-theritiary">i</span><span className="text-sm ml-4 font-normal">"bicycle journey planner"</span> </div>
            <ul className="flex justify-end items-center w-full p-5 text-base font-medium mr-auto">
                <li className="pl-8 pr-8 p-4 hover:bg-gray-100 hover:text-theritiary font-bold hover:border-l-2 hover:border-r-2 hover:border-accent hover:scale-110 transition-all duration-300">
                    <NavLink to="/" className={({isActive})=> isActive ? "text-theritiary font-bold" : "text-primary"}>Create Route</NavLink>
                </li>
                <li className="pl-8 pr-8 p-4 hover:bg-gray-100 hover:text-theritiary font-bold hover:border-l-2 hover:border-r-2 hover:border-accent hover:scale-110 transition-all duration-300">
                    <NavLink to="/dashboard" className={({isActive})=> isActive ? "text-theritiary font-bold" : "text-primary"}>Dashboard</NavLink>
                </li>
                <li className="pl-8 pr-8 p-4 hover:bg-gray-100 hover:text-theritiary font-bold hover:border-l-2 hover:border-r-2 hover:border-accent hover:scale-110 transition-all duration-300">
                    <NavLink to="/ridelog" className={({isActive})=> isActive ? "text-theritiary font-bold" : "text-primary"}>RideLog</NavLink>
                </li>
            </ul>
        </div>
</>
     );
}

export default NavigationBarMain;