import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import HomePage from "./pages/HomePage";
import NavigationBarMain from "./components/NavigationBarMain";
import NavigationBar from "./components/NavigationBar";
import Dashboard from "./pages/Dashboard";
import RideLog from "./pages/RideLog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function App() {
  return ( 
    <QueryClientProvider client={queryClient}>
    <Router>
            {/* // Navigation bar */}
            <div className="relative z-30 hidden sm:hidden lg:block md:block ">
            <NavigationBarMain />
            </div> 
            <div className="relative z-30 sm:block lg:hidden md:hidden">
            <NavigationBar />
            </div>      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ridelog" element={<RideLog />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </Router>

    </QueryClientProvider>

   );
}

export default App;