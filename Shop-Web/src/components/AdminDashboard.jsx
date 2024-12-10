import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { Link, useNavigate } from "react-router";
import { ImBin } from "react-icons/im";
import { FaPenToSquare } from "react-icons/fa6";
import { MdOutlineAdd } from "react-icons/md";
import toast, { Toaster } from 'react-hot-toast';

function AdminDashboard({ handleLogout }) {
  const [productData, setProductData] = useState([]);

  const success = (msg) => toast.success(msg);
  const error = (msg) => toast.error(msg);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        console.log(response);
        setProductData(response.data); 
      })
      .catch((error) => {
        console.log("Fetch Error", error);
      });
  }, []);

  const navigate = useNavigate();
  const handleEditClick = (productId) => {
    navigate(`/editProduct/${productId}`);
  };

  const handleDelete = (id) => {
    if (confirm('Do you want to delete ?')) {
      axios.delete(`http://localhost:3000/products/${id}`)
        .then(() => {
          setProductData((prevData) => prevData.filter((product) => product.id !== id));
          success('Product deleted successfully!');
        })
        .catch((err) => {
          console.error('Error deleting products :', err);
        });
    }
  };

  return (
    <div className="p-8 w-full min-h-screen bg-gray-100">
      <Toaster />
      {/* Header */}
      <Header handleLogout={handleLogout} />

      <div className="max-w-7xl mx-auto">


        {/* Items Table */}
        <div className="mt-10 bg-white rounded-lg shadow-md p-6">
          <div className="mb-6 flex justify-between">
            <h2 className="text-2xl font-semibold text-gray-800">
              Manage Items
            </h2>
            <Link to='/addproduct'>
              <button className="mr-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition flex items-center gap-2">
                Add
                <MdOutlineAdd />
              </button>
            </Link>
          </div>
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Category</th>
                  <th className="px-4 py-2">Price</th>
                  <th className="px-4 py-2">Stock</th>
                  <th className="px-4 py-2">Description</th>
                  <th className="px-4 py-2">Weight</th>
                  <th className="px-4 py-2">Dimensions</th>
                  <th className="px-4 py-2">Image</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {productData.map((product) => (
                  <tr key={product.id} className="border-b">
                    <td className="px-4 py-2">{product.id}</td>
                    <td className="px-4 py-2">{product.name}</td>
                    <td className="px-4 py-2">{product.category}</td>
                    <td className="px-4 py-2">${product.price}</td>
                    <td className="px-4 py-2">{product.stock}</td>
                    <td className="px-4 py-2">{product.description}</td>
                    <td className="px-4 py-2">{product.weight}</td>
                    <td className="px-4 py-2">{product.dimensions}</td>
                    <td className="px-4 py-2">
                      <img
                        src={product.image_url}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                    </td>
                    <td className="px-4 py-2">
                      <button
                        className="mr-2 bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
                        onClick={() => handleEditClick(product.id)}
                      >
                        <FaPenToSquare />
                      </button>
                      <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition" onClick={() => { handleDelete(product.id) }}>
                        <ImBin />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
