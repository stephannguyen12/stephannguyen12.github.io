
import { Link, useLocation } from 'react-router-dom';


function NavBar () {

  const location = useLocation();

  const pathsToRenderNav = ['/', '/About']; // paths not to have navbar




    return (
        <div>
            {pathsToRenderNav.includes(location.pathname) && (
                <nav className="homepage-nav fade-in-5s-80">
                    <ul className="text-30">
                        <li><Link to="/">+ Stephan Nguyen</Link></li>
                        <li><Link to="Sketchbook">+ Sketchbook</Link></li>
                        <li><Link to="Projects">+ Projects</Link></li>
                    </ul>
                </nav>
            )}


            {!pathsToRenderNav.includes(location.pathname) && (
                <nav className="margin-1600 nav">
                    <ul className="text-30">
                        <li><Link to="/">Stephan Nguyen</Link></li>
                        <li><Link to="Sketchbook">Sketchbook</Link></li>
                        <li><Link to="Projects">Projects</Link></li>
                    </ul>
                </nav>
            )}

        </div>
    )
}

export default NavBar;