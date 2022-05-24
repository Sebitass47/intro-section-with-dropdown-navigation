import { useState } from 'react'
import useScreenSize from '../../hooks/useScreenSize'
import './Navbar.css'
import Logo from './Logo'
import NavLinks from './NavLinks'
import NavSessions from './NavSessions'
import icon_close_menu from './svg/icon-close-menu.svg'
import icon_menu from './svg/icon-menu.svg'


const Navbar = () => {

    const [menuVisible, setMenuVisible] = useState(false)
    const width = useScreenSize()

    const show = () => {
        setMenuVisible(!menuVisible)
    }

    return(
        <div className='navbar'>
            <Logo/>
            <img src={icon_menu} alt='menu' className='menu' onClick={show}/>
            <div className={menuVisible || width > 600 ? 'navlinks-container': 'navlinks-container hidden'}>
                {width < 600 ? <img src={icon_close_menu} alt='Cerrar' className='close' onClick={show} /> : null}
                <NavLinks/>
                <NavSessions/>
            </div>    
        </div>
    )
}

export default Navbar