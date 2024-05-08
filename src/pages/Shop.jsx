import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Cart } from "../components/apiShop/Cart";
import { addToCart } from "../helpers/cart";
import "../styles/cart.css";

export const Shop = () => {
  const [products, setproducts] = useState([]);
  const [updateCart, setUpdateCart] = useState(false);
  // const [cart, setCart] = useState([]);
  let location = useLocation();
  const navigate = useNavigate();

  const url = "https://fakestoreapi.com/products/";
  const options = {
    method: "GET",
  };

  useEffect(() => {
    getInfo();
  }, []);

  function getInfo() {
    fetch(url, options)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setproducts(res);
      });
  }

  return (
    <>
      <Cart 
        setUpdateCart={setUpdateCart}
        updateCart={updateCart}
      />

      <div className="container-card">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt="" />
            <h4>{product.title}</h4>
            <p>${product.price}</p>
            <div>
              <button onClick={() => navigate(`/shop/pruduct/${product.id}`)}>
                See details
              </button>
              <button
                className="cart-button"
                onClick={() =>{ addToCart("cart", product), setUpdateCart(true)}}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
