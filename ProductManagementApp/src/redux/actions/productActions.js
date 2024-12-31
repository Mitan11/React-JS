import { setProducts, deleteProduct } from '../slices/productSlice';

import axios from 'axios';

export const fetchProducts = () => (dispatch) => {
    axios.get('http://localhost:3000/products')
        .then((response) => {
            console.log(response.data);
            dispatch(setProducts(response.data));
        })
        .catch((error) => {
            console.error('Failed to fetch products:', error);
        });
};

export const createProduct = (product) => (dispatch) => {
    axios.post('http://localhost:3000/products', product)
        .then((response) => {
            const newProduct = response.data;
        })
        .catch((error) => {
            console.error('Failed to add product:', error);
        });
};

export const removeProduct = (id) => (dispatch) => {
    axios.delete(`http://localhost:3000/products/${id}`)
        .then((response) => {
            console.log(response);
            dispatch(deleteProduct(id));
        })
        .catch((error) => {
            console.error('Failed to delete product:', error);
        });
};

export const editProduct = (id, product) => (dispatch) => {
    axios.put(`http://localhost:3000/products/${id}`, product)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.error('Failed to update product:', error);
        });
};

