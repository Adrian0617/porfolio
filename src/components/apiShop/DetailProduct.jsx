import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const DetailProduct = () => {
  const { id } = useParams();

  const [product, setproduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setproduct(data));
  }, []);

  return (
    <div className="detail-container">
      <div>
        <img src={product.image} alt="" />
        <h3>{product.title}</h3>
      </div>
      <div>
        <h3>{product.description}</h3>
        <hr />
        <h2>${product.price}</h2>
      </div>
    </div>
  );
};
