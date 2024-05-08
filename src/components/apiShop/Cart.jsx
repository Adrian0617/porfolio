import React, { useEffect, useState } from "react";
import "../../styles/cart.css";
import { deleteItem } from "../../helpers/cart";

export const Cart = ({ setUpdateCart, updateCart }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartList, setcartList] = useState([]);

  useEffect(() => {
    const listCart = JSON.parse(localStorage.getItem("cart"));
    setcartList(listCart);
    console.log({ listCart });
    setUpdateCart(false);
  }, [updateCart]);

  const priceTotal = cartList?.reduce(
    (curr, acc) => curr + acc.price * acc.quantity,
    0
  );

  return (
    <div className="container-cart">
      <button className="toggle-btn" onClick={() => setShowCart(!showCart)}>
        {showCart ? "Close cart" : "Show cart"}{" "}
        <span className="buton-danger">{cartList.length}</span>
      </button>

      {showCart && (
        <div className="cart">
          <button onClick={() => setShowCart(false)}>x</button>
          <h2>Carrito de Compras </h2>
          {cartList?.map((item) => (
            <li className="cart-item" key={item.id}>
              <span className="item-name">{item.title}</span>
              <span className="item-price">${item.price}</span>
              <span className="item-price">{item.quantity}</span>

              <button
                className="remove-item"
                onClick={() => {
                  deleteItem("cart", item.id), setUpdateCart(true);
                }}
              >
                X
              </button>
            </li>
          ))}
          <ul className="cart-items"></ul>
          <div className="cart-total">
            <span>Total:</span>
            <span className="total-price">${priceTotal.toFixed(2)}</span>
          </div>
          <button className="checkout-btn">Pagar</button>
        </div>
      )}
    </div>
  );
};
