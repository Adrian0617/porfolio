import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Cart } from "../components/apiShop/Cart";
import { addToCart, searchList } from "../helpers/cart";
import "../styles/cart.css";
import "../styles/products.css";
import { Search } from "../components/apiShop/Search";

export const Shop = () => {
  const [products, setproducts] = useState([]);
  const [updateCart, setUpdateCart] = useState(false);
  const [searching, setsearching] = useState("");

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

  const list = searchList(products, "title", searching);

  const selectList = searching ? list : products;

  return (
    <>
      <div className="container-bar">
        <Search searching={searching} setsearching={setsearching} />
        <Cart setUpdateCart={setUpdateCart} updateCart={updateCart} />
      </div>

      <div className="container-card">
        {selectList.map((product) => (
          <div className="card" key={product.id}>
            <div className="header-card">
            <img src={product.image} alt="" />
            </div>
            <div className="footer-card">
              <h4>{product.title}</h4>
              <p>${product.price}</p>
              <div >
                <button
                  className="btn-sucees"
                  onClick={() => navigate(`/shop/pruduct/${product.id}`)}
                >
                  See details
                </button>
                <button
                  className="btn-sucees"
                  onClick={() => {
                    addToCart("cart", product), setUpdateCart(true);
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
