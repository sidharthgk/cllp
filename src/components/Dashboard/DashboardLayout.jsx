import Sidebar from './Sidebar';
import Header from './Header';
import '../../styles/dashboard.css';
import PropTypes from 'prop-types';

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content-area">{children}</div>
      </div>
    </div>
  );
};
DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;