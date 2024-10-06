import React from 'react'

function Card({ imageUrl, name, description, price }) {
    return (
        <div className="card max-w-80 bg-base-100 hover:shadow-xl transition duration-200 ease-linear">
            <figure><img src={imageUrl} alt={name} className="w-full h-48 object-cover" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-blue-500 hover:bg-blue-400 text-white">${price}</button>
                </div>
            </div>
        </div>
    )
}

export default Card