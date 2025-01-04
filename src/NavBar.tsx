
import { NavLink, useLocation } from 'react-router-dom';


function NavBar () {

  const location = useLocation();


    return (
        <div>
            <nav className="nav-bar text-24 fade-in-5s-80">
                    <NavLink to="/"
                            className="nav-link"
                            >   Stephan Nguyen</NavLink>
                    <NavLink to="Sketchbook"
                            className={({ isActive }) => (isActive ? 
                            "nav-link-active-blue" : "nav-link")}>
                            {location.pathname === "/Sketchbook" ? "   Sketchbook" : "+ Sketchbook"}</NavLink>
                    <NavLink to="Projects"
                            className={({ isActive }) => (isActive ? 
                            "nav-link-active-blue" : "nav-link")}>
                            {location.pathname === "/Projects" ? "   Projects" : "+ Projects"}</NavLink>
                    <NavLink to="About"
                            className={({ isActive }) => (isActive ? 
                            "nav-link-active-white" : "nav-link")}>
                            {location.pathname === "/About" ? "   About" : "+ About"}</NavLink>
            </nav>
        </div>
            )}

export default NavBar;