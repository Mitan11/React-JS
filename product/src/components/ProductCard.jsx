import React, { useEffect, useState } from 'react';

function ProductCard() {
    const [productData, setProductData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Fetch product data from API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://fakestoreapi.com/products');
                const data = await res.json();
                setProductData(data);
            } catch (error) {
                console.log('Error:', error);
            }
        };

        fetchData();
    }, []);

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
        <div
            className="d-flex justify-content-center align-items-center vh-100 position-relative"
            style={{ backgroundColor: '#f8f9fa' }}
        >
            {productData.length > 0 ? (
                <>
                    {/* Previous Button */}
                    <button
                        onClick={handlePrevious}
                        className="btn btn-secondary position-absolute"
                        style={{ left: '10%', top: '50%', transform: 'translateY(-50%)' }}
                    >
                        Previous
                    </button>

                    {/* Card */}
                    <div className="card" style={{ width: '20rem' }}>
                        <img
                            src={productData[currentIndex].image}
                            className="card-img-top object-fit-contain img-thumbnail" style={{height : "200px"}}
                            alt={productData[currentIndex].title}
                        />
                        <div className="card-body">
                            <h5 className="card-title">{productData[currentIndex].title}</h5>
                            <p className="card-text">
                                <strong>ID:</strong> {productData[currentIndex].id}
                            </p>
                            <p className="card-text">{productData[currentIndex].description}</p>
                            <p className="card-text">
                                <strong>Price:</strong> ${productData[currentIndex].price}
                            </p>
                            <a href="#" className="btn btn-primary">
                                Buy Now
                            </a>
                        </div>
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={handleNext}
                        className="btn btn-secondary position-absolute"
                        style={{ right: '10%', top: '50%', transform: 'translateY(-50%)' }}
                    >
                        Next
                    </button>
                </>
            ) : <h2>Loding.........</h2>}
        </div>
    );
}

export default ProductCard;
