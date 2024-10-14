import React, { useEffect, useState } from 'react';
import Preloder from './Preloder'

function ProductCard() {
    const [productData, setProductData] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(1);

    // Fetch product data from API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`https://fakestoreapi.com/products/${currentIndex}`);
                const data = await res.json();
                console.log(data);
                setProductData(data);
            } catch (error) {
                console.log('Error:', error);
            }
        };

        fetchData();
    }, [currentIndex]);

    // Function to handle "Previous" button click
    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? productData.length - 1 : prevIndex - 1
        );
    };

    // Function to handle "Next" button click
    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === productData.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <>
            <h1 className='text-center p-4 bg-info'>Product : {productData.id}</h1>
            <div
                className="d-flex bg-warning justify-content-center align-items-center p-5 position-relative"
            >
                {/* Previous Button */}
                <button
                    onClick={handlePrevious}
                    className="btn btn-secondary position-absolute bg-danger"
                    style={{ left: '10%', top: '50%', transform: 'translateY(-50%)' }}
                >
                    Previous
                </button>

                {productData ? (
                    <>

                        {/* Card */}
                        <div className="card" style={{ width: '20rem' }}>
                            <div className="card-header p-1 rounded">
                                <img
                                    src={productData.image}
                                    className="card-img-top object-fit-contain img-thumbnail" style={{ height: "200px" }}
                                    alt={productData.title}
                                />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{productData.title}</h5>
                                <p className="card-text">{productData.description.slice(0,100)}</p>
                                <p className="card-text">
                                    <strong>Price:</strong> ${productData.price}
                                </p>
                            </div>
                            <div className="card-footer">
                                <a href="#" className="btn btn-primary">
                                    Buy Now
                                </a>
                            </div>
                        </div>

                    </>
                ) : <Preloder />}
                {/* Next Button */}
                <button
                    onClick={handleNext}
                    className="btn btn-secondary position-absolute bg-success"
                    style={{ right: '10%', top: '50%', transform: 'translateY(-50%)' }}
                >
                    Next
                </button>
            </div>
        </>
    );
}

export default ProductCard;
