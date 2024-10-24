import React from 'react'
import { Link, useParams } from 'react-router-dom'
import NavBar from '../components/NavBar'

function Home() {
    const {name} = useParams() 
    return (
        <>
            <NavBar />
            <div>Home</div>
        </>
    )
}

export default Home