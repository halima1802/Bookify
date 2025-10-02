import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user,dispatch } = useContext(AuthContext);
  const handleLogin = () => {
    window.location.href = "/login";
  }
  const handleLogout = () => {
    window.location.href = "/";
    dispatch({ type: "LOGOUT" }) ;
  }
  const handleRegister = () => {
    window.location.href = "/register";
  }

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Bookify</span>
        </Link>
        {user ? <div className="navItems">
        Welcome, {user}
            <button className="navButton" onClick={handleLogout} >Logout</button>
          </div>
        
       : (
          <div className="navItems">
            <button className="navButton" onClick={handleRegister}>Register</button>
            <button className="navButton" onClick={handleLogin}>Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;