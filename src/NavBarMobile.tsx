import {Link } from 'react-router-dom'
import {useState} from 'react'
import hamburgerIcon from './images/hamburger.png'
import closeIcon from './images/close.png'

function NavBarMobile() { /* styling is in index.css */

    const [isOpen, setIsOpen] = useState(false);

    const closeHamMenu = () => setIsOpen(false);

    return(
    <nav className="nav-mobile">
        <ul>
            <li><Link to="/">Stephan</Link></li>
            <li onClick={() => setIsOpen(!isOpen)}>
                {isOpen
                ? <img src={closeIcon}></img>
                : <img src={hamburgerIcon}></img>}
            </li>
        </ul>
        {isOpen && <HamMenu closeMenu={closeHamMenu}></HamMenu>}
    </nav>
    )
}

export function HamMenu(props: any) {
    return (
        <>
        <nav className="ham-menu">
        <ul>
            <li onClick={() => props.closeMenu()}> <Link to="About">About</Link> </li>
            <li onClick={() => props.closeMenu()}> <Link to="Sketchbook">Sketchbook</Link></li>
            <li onClick={() => props.closeMenu()}> <Link to="Projects">Projects</Link> </li>
        </ul>
        </nav>

        </>
    )
}
export default NavBarMobile;

/*
            <ul>
            <li> <Link to="About">About</Link> </li>
            <li> <Link to="Sketchbook">Sketchbook</Link></li>
            <li> <Link to="Projects">Projects</Link> </li>
            </ul>
*/