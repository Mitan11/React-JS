import React, { createContext, useState } from 'react'
import NavBar from './NavBar'
import Card from './Card'

export const cartcontext = createContext();
export const addtocartcontext = createContext();

function Home() {

    const [cartCount, setCartCount] = useState(0);
    const addtocart = () => {
        setCartCount(cartCount + 1);
    }

    return (
        <>
            <cartcontext.Provider value={cartCount}>
                <addtocartcontext.Provider value={addtocart}>

                    <NavBar />
                    <div className='px-4 md:px-8 flex justify-evenly flex-wrap gap-3'>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>

                </addtocartcontext.Provider>
            </cartcontext.Provider>

        </>
    )
}

export default Home