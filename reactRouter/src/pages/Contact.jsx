import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
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
        <div>Contact</div>
        </>
    )
}

export default Contact