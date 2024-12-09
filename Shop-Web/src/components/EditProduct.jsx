import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";

function EditProduct() {
    const { pId } = useParams();
    const navigate = useNavigate();

    // State for each field
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [stock, setStock] = useState(0);
    const [imageUrl, setImageUrl] = useState("");
    const [weight, setWeight] = useState("");
    const [dimensions, setDimensions] = useState("");

    // Fetch product details by ID
    useEffect(() => {
        axios
            .get(`http://localhost:3000/products/${pId}`)
            .then((response) => {
                const product = response.data;
                setName(product.name || "");
                setCategory(product.category || "");
                setPrice(product.price || 0);
                setDescription(product.description || "");
                setStock(product.stock || 0);
                setImageUrl(product.image_url || "");
                setWeight(product.weight || "");
                setDimensions(product.dimensions || "");
            })
            .catch((err) => console.error("Error fetching product:", err));
    }, [pId]);

    // Save updated product details
    const handleSave = () => {
        if (confirm('Do you want to Edit')) {
            const updatedProduct = {
                name,
                category,
                price,
                description,
                stock,
                image_url: imageUrl,
                weight,
                dimensions,
            };

            axios
                .put(`http://localhost:3000/products/${pId}`, updatedProduct)
                .then(() => {
                    alert("Product updated successfully!");
                    navigate("/");
                })
                .catch((err) => {
                    alert("Error updating product!");
                    console.error(err);
                });
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        handleSave();
    };

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Edit Product</h1>

            <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Product Name
                    </label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                {/* Category */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Category
                    </label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </div>

                {/* Price */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Price
                    </label>
                    <input
                        type="number"
                        className="w-full px-4 py-2 border rounded-lg"
                        value={price}
                        onChange={(e) => setPrice(parseFloat(e.target.value))}
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description
                    </label>
                    <textarea
                        className="w-full px-4 py-2 border rounded-lg"
                        rows="4"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                {/* Stock */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Stock Quantity
                    </label>
                    <input
                        type="number"
                        className="w-full px-4 py-2 border rounded-lg"
                        value={stock}
                        onChange={(e) => setStock(parseInt(e.target.value))}
                    />
                </div>

                {/* Image URL */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Image URL
                    </label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                    />
                </div>

                {/* Weight */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Weight
                    </label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                    />
                </div>

                {/* Dimensions */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Dimensions
                    </label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg"
                        value={dimensions}
                        onChange={(e) => setDimensions(e.target.value)}
                    />
                </div>

                {/* Save Button */}
                <div>
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditProduct;
