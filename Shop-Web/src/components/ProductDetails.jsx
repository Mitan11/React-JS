import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

function ProductDetails() {
    const { pId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:3000/products/${pId}`)
            .then((response) => {
                setProduct(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching product details:", error);
                setLoading(false);
            });
    }, [pId]);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <p className="text-2xl font-bold text-gray-500">Loading product details...</p>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <p className="text-2xl font-bold text-red-500">Product not found!</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto p-8">
                {/* Back Button */}
                <button
                    onClick={() => window.history.back()}
                    className="mb-6 inline-flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300 transition"
                >
                    ← Back to Products
                </button>

                {/* Product Details */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white p-8 rounded-xl shadow-lg">
                    {/* Product Image */}
                    <div className="flex items-center justify-center">
                        <img
                            src={product.image_url}
                            alt={product.name}
                            className="max-w-full rounded-lg shadow-md transform transition hover:scale-105"
                        />
                    </div>

                    {/* Product Info */}
                    <div>
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
                        <p className="text-sm text-gray-500 mb-2">
                            <span className="font-medium text-gray-700">Category:</span> {product.category}
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed mb-4">{product.description}</p>

                        <div className="text-2xl font-semibold text-green-600 mb-4">
                            Price: ${product.price}
                        </div>

                        <ul className="text-gray-700 space-y-2">
                            <li>
                                <strong>Stock Available:</strong> {product.stock}
                            </li>
                            <li>
                                <strong>Weight:</strong> {product.weight}
                            </li>
                            <li>
                                <strong>Dimensions:</strong> {product.dimensions}
                            </li>
                        </ul>

                        <button className="mt-6 w-full lg:w-auto px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">You may also like</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
                            <div className="bg-gray-200 h-40 rounded-lg mb-4"></div>
                            <p className="text-gray-700 font-medium text-center">Related Product</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
                            <div className="bg-gray-200 h-40 rounded-lg mb-4"></div>
                            <p className="text-gray-700 font-medium text-center">Related Product</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
