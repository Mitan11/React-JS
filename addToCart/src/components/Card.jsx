import React, { useContext } from "react";
import { addtocartcontext } from "../App";

function Card({ product }) {
  const handleaddtocart = useContext(addtocartcontext);
  return (
    <>
      <div className="group my-8 flex w-full max-w-xs flex-col overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm h-fit">
        <a
          className="relative mx-2 mt-2 flex h-52 overflow-hidden rounded-lg"
          href="#"
        >
          <img
            className="peer absolute top-0 right-0 h-full w-full object-cover"
            src={product.image}
            alt="product image"
          />
        </a>
        <div className="mt-3 px-4 pb-4">
          <a href="#">
            <h5 className="text-lg font-medium text-slate-900">
              {product.title}
            </h5>
          </a>
          <div className="mt-2 mb-4 flex items-center justify-between">
            <p>
              <span className="text-2xl font-bold text-slate-900">
                ${product.price}
              </span>
            </p>
          </div>
          <button
            className="flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            onClick={(e) => {
              handleaddtocart(product.id);
              e.target.disabled = true;
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
