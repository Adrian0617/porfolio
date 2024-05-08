import React, { useState } from "react";
import "../../styles/cart.css";

export const Cart = () => {
  const [showCart, setShowCart] = useState();

  return (
    <div className="container-cart">
      <button className="toggle-btn" onClick={() => setShowCart(!showCart)}>
        Mostrar carrito
      </button>
      {showCart && (
        <div className="cart">
          <h2>Carrito de Compras <button onClick={()=>setShowCart(false)}>X</button></h2>
          <ul className="cart-items">
            <li className="cart-item">
              <span className="item-name">Producto 1</span>
              <span className="item-price">$10.00</span>
              <button className="remove-item">Eliminar</button>
            </li>
            <li className="cart-item">
              <span className="item-name">Producto 2</span>
              <span className="item-price">$15.00</span>
              <button className="remove-item">Eliminar</button>
            </li>
          </ul>
          <div className="cart-total">
            <span>Total:</span>
            <span className="total-price">$25.00</span>
          </div>
          <button className="checkout-btn">Pagar</button>
        </div>
      )}
    </div>
  );
};
