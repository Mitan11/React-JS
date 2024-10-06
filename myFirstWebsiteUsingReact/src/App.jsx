import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cardsection from './components/Cardsection'
import ContactUs from './components/Contactus'
import Footer from './components/Footer'

function App() {
    return (
        <>
            <Navbar/>
            <Hero/>
            <Cardsection/>
            <ContactUs/>
            <Footer/>
        </>
    )
}

export default App