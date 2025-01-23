import "../../styles/dashboard.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li onClick={() => (window.location.href = "/scratch-mode")}>
          🏠 Scratch Mode
        </li>
        <li onClick={() => (window.location.href = "/comparison-mode")}>
          📊 Comparison Mode
        </li>
        <li onClick={() => (window.location.href = "/")}>🔙 Back to Home</li>
      </ul>
    </div>
  );
};

export default Sidebar;
