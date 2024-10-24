import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <>

            <nav>
                <ul>
                    <li><Link to={`/`}>Home</Link></li>
                    <li><Link to={`/Contact`}>Contact</Link></li>
                    <li><Link to={`/AboutUs`}>About Us</Link></li>
                    <li><Link to={`/Blog`}>Blog</Link></li>
                </ul>
            </nav>

        </>
    )
}

export default NavBar