import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <h1 className="logo">VIN Decoder</h1>

        <nav className="nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-active" : "nav-link"
            }
            end
          >
            VIN decoder
          </NavLink>

          <NavLink
            to="/variables"
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-active" : "nav-link"
            }
          >
            Variables
          </NavLink>
        </nav>
      </div>
    </header>
  );
}