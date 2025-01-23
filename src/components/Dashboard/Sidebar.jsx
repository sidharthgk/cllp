import "../../styles/dashboard.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li>
          <Link to="/scratch-mode">🏠 Scratch Mode</Link>
        </li>
        <li>
          <Link to="/comparison-mode">📊 Comparison Mode</Link>
        </li>
        <li>
          <Link to="/">🔙 Back to Home</Link>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
