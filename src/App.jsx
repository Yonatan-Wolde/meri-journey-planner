import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import NavigationBar from "./components/NavigationBar";
import Dashboard from "./components/Dashboard";
import RideLog from "./components/RideLog";

function App() {
  return ( 
    <Router>
            {/* // Navigation bar */}      
            <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ridelog" element={<RideLog />}/>
      </Routes>

    </Router>

   );
}

export default App;