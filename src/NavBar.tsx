import {Link } from 'react-router-dom'

function NavBar() { /* styling is in index.css */
    return(
    <nav className="nav">
        <ul className="width-1280">
            <li><Link to="/" className="nav-title">Stephan Nguyen</Link></li>
            <ul>
            <li> <Link to="About">About</Link> </li>
            <li> <Link to="Sketchbook">Sketchbook</Link></li>
            <li> <Link to="Projects">Projects</Link> </li>
            </ul>
        </ul>
    </nav>
    )
}

export default NavBar;