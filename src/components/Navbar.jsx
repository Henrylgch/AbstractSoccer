import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <div>
            <ul>
               <li><Link to='/' >Lista de partidos</Link></li>
               <li> <Link to='/create_match'>Crear partido</Link> </li>
            </ul>
        </div>
    )
}

export default Navbar