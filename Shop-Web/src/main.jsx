import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
import ProductDetails from './components/ProductDetails.jsx'
import EditProduct from './components/EditProduct.jsx'
import AddProduct from './components/AddProduct.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/productdetails/:pId" element={<ProductDetails />} />
        <Route path="/editProduct/:pId" element={<EditProduct />} />
        <Route path="/addproduct" element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
