import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import HomePage from "./pages/HomePage";
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
            <NavigationBar />
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