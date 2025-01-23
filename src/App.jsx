import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ScratchModePage from "./pages/ScratchModePage";
import ComparisonModePage from "./pages/ComparisonModePage";
import DashboardPage from "./pages/DashboardPage";
import "./App.css";
import "./styles/global.css";

const App = () => {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/scratch-mode" element={<ScratchModePage />} />
          <Route path="/comparison-mode" element={<ComparisonModePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
