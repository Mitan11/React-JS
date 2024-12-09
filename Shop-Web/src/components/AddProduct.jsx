import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

function AddProduct() {
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
    const [errors, setErrors] = useState({});

    // Validation function
    const validate = () => {
        const newErrors = {};
        if (!name) newErrors.name = "Product name is required.";
        if (!category) newErrors.category = "Category is required.";
        if (!price || price <= 0) newErrors.price = "Price must be a positive number.";
        if (!description) newErrors.description = "Description is required.";
        if (!stock || stock < 0) newErrors.stock = "Stock must be 0 or a positive number.";
        if (!imageUrl) newErrors.imageUrl = "Image URL is required.";
        if (!weight) newErrors.weight = "Weight is required.";
        if (!dimensions) newErrors.dimensions = "Dimensions are required.";
        setErrors(newErrors);

        // Return true if no errors
        return Object.keys(newErrors).length === 0;
    };

    const handleSave = () => {
        const newProduct = {
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
            .post(`http://localhost:3000/products`, newProduct)
            .then(() => {
                alert("Product added successfully!");
                navigate("/"); // Redirect to the dashboard after saving
            })
            .catch((err) => {
                alert("Error adding product!");
                console.error(err);
            });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            handleSave();
        }
    };

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Add Product</h1>

            <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                {/* Category */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                    {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
                </div>

                {/* Price */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
                    <input
                        type="number"
                        className="w-full px-4 py-2 border rounded-lg"
                        value={price}
                        onChange={(e) => setPrice(parseFloat(e.target.value))}
                    />
                    {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
                </div>

                {/* Description */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea
                        className="w-full px-4 py-2 border rounded-lg"
                        rows="4"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
                </div>

                {/* Stock */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Stock Quantity</label>
                    <input
                        type="number"
                        className="w-full px-4 py-2 border rounded-lg"
                        value={stock}
                        onChange={(e) => setStock(parseInt(e.target.value))}
                    />
                    {errors.stock && <p className="text-red-500 text-sm mt-1">{errors.stock}</p>}
                </div>

                {/* Image URL */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                    />
                    {errors.imageUrl && <p className="text-red-500 text-sm mt-1">{errors.imageUrl}</p>}
                </div>

                {/* Weight */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Weight</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                    />
                    {errors.weight && <p className="text-red-500 text-sm mt-1">{errors.weight}</p>}
                </div>

                {/* Dimensions */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Dimensions</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg"
                        value={dimensions}
                        onChange={(e) => setDimensions(e.target.value)}
                    />
                    {errors.dimensions && <p className="text-red-500 text-sm mt-1">{errors.dimensions}</p>}
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

export default AddProduct;
