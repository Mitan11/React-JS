import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import axios from 'axios';
import { useNavigate } from 'react-router';
import Header from './Header';

function UserDashBoard({ handleLogout }) {
  const [productData, setProductData] = useState([]);
  const navigate = useNavigate();
  
  
  useEffect(() => {
    axios
      .get('http://localhost:3000/products')
      .then((response) => {
        console.log(response);
        setProductData(response.data);
      })
      .catch((error) => {
        console.log('Fetch Error', error);
      });
  }, []);

  const productDetails = (id) => {
    console.log(id);
    navigate(`/productdetails/${id}`);
  }

  return (
    <div className='p-8 w-full min-h-screen bg-gray-100'>
      {/* Header */}
      <Header handleLogout={handleLogout} />

      {/* Product Grid */}
      <div className='grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {productData.length > 0 ? (
          productData.map((product) => (
            <ProductCard
              key={product.id}
              pid={product.id}
              pname={product.name}
              pprice={product.price}
              pimg={product.image_url}
              productDetails={productDetails}
            />
          ))
        ) : (
          <div className='col-span-full text-center'>
            <p className='text-lg font-medium text-gray-500'>Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserDashBoard;
