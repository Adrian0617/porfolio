import React, { useEffect, useState } from "react";
import "../../styles/cart.css";
import { deleteItem } from "../../helpers/cart";

export const Cart = ({setUpdateCart, updateCart}) => {
  const [showCart, setShowCart] = useState(false);
  const [cartList, setcartList] = useState([])

  useEffect(() => {
    const listCart = JSON.parse(localStorage.getItem("cart"));
    setcartList(listCart)
    console.log({ listCart });
    setUpdateCart(false)

  }, [updateCart])
  


  const priceTotal = cartList?.reduce((curr,acc)=> curr + acc.price, 0)
  console.log(cartList);

  return (
    <div className="container-cart">
        <button className="toggle-btn" onClick={() => setShowCart(!showCart)}>
          {showCart ? 'Close cart' :'Show cart'}
        </button>
      {showCart && (
        <div className="cart">
          <h2>
            Carrito de Compras{" "}
            <button onClick={() => setShowCart(false)}>X</button>
          </h2>
          {cartList?.map((item) => (
            <li className="cart-item" key={item.id}>
              <span className="item-name">{item.title}</span>
              <span className="item-price">${item.price}</span>
              <span className="item-price">{item.quantity}</span>

              <button className="remove-item" 
                onClick={()=> {deleteItem('cart', item.id), setUpdateCart(true)}}
              >Eliminar</button>
            </li>
          ))}
          <ul className="cart-items"></ul>
          <div className="cart-total">
            <span>Total:</span>
            <span className="total-price">${priceTotal}</span>
          </div>
          <button className="checkout-btn">Pagar</button>
        </div>
      )}
    </div>
  );
};
