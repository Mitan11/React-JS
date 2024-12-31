import React from "react";
import { useDispatch } from "react-redux";
import { removeProduct } from "../redux/actions/productActions";
import { useNavigate } from "react-router";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleEdit = (id) => {
    navigate(`/edit-product/${id}`);
  };
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.category}</td>
      <td>{product.description}</td>
      <td>${product.price}</td>
      <td>{product.quantity}</td>
      <td>
        <img
          src={product.image}
          alt={product.name}
          className="img-fluid rounded"
          style={{
            maxWidth: "100px",
            height: "auto",
            objectFit: "cover",
          }}
        />
      </td>
      <td>
        <button
          className="btn btn-warning btn-sm me-2"
           onClick={() => handleEdit(product.id)}
        >
          Edit
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => dispatch(removeProduct(product.id))}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ProductItem;
