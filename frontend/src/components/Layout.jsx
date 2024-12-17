import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            FiManager
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item" style={{ display: localStorage.getItem('user_id') ? 'block' : 'none' }}>
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item" style={{ display: localStorage.getItem('user_id') ? 'block' : 'none' }}>
                <Link className="nav-link" to="/income">
                  Income
                </Link>
              </li>
              <li className="nav-item" style={{ display: localStorage.getItem('user_id') ? 'block' : 'none' }}>
                <Link className="nav-link" to="/expense">
                  Expenses
                </Link>
              </li>
              <li className="nav-item" style={{ display: localStorage.getItem('user_id') ? 'none' : 'block' }}>
                <Link className="nav-link" to="/">
                  Signin
                </Link>
              </li>
              <li className="nav-item" style={{ display: localStorage.getItem('user_id') ? 'none' : 'block' }}>
                <Link className="nav-link" to="/signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item" style={{ display: localStorage.getItem('user_id') ? 'block' : 'none' }}>
                <Link className="nav-link" to="/signout">
                  Signout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
