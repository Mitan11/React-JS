import React from 'react'
import Card from './Card'

function Cardsection() {
    const products = [
        {
            imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1999&q=80",
            name: "Smart Watch",
            description: "A sleek and modern smartwatch with health tracking features.",
            price: 199.99
        },
        {
            imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            name: "Wireless Headphones",
            description: "High-quality wireless headphones with noise cancellation.",
            price: 149.99
        },
        {
            imageUrl: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            name: "Polaroid Camera",
            description: "Vintage-style instant camera for capturing memories.",
            price: 79.99
        }
    ]

    return (
        <div className="w-full p-10">
            <h1 className="text-center text-2xl md:text-3xl font-bold pb-8 underline">Featured Products</h1>
            <div className="flex justify-around flex-wrap gap-y-14">
                <Card 
                    imageUrl={products[0].imageUrl}
                    name={products[0].name}
                    description={products[0].description}
                    price={products[0].price}
                />
                <Card 
                    imageUrl={products[1].imageUrl}
                    name={products[1].name}
                    description={products[1].description}
                    price={products[1].price}
                />
                <Card 
                    imageUrl={products[2].imageUrl}
                    name={products[2].name}
                    description={products[2].description}
                    price={products[2].price}
                />
            </div>
        </div>
    )
}

export default Cardsection