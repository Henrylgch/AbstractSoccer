import React from 'react'
import {Link} from 'react-router-dom'

import Logo from '../../assets/img/abstractsoccer.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                <img 
                    src={Logo}
                    width="30" 
                    height="30" 
                    className="d-inline-block align-top" 
                    alt="Abstract Soccer Logo" 
                />
                Abstract Soccer
            </Link>
        </nav>
    )
}

export default Navbar