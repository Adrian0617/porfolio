import React, { useEffect, useState } from "react";
import "../../styles/products.css";

export const FilterProduct = ({ setproducts, getInfo }) => {
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setcategories(json));
  }, []);

  console.log(categories);
  function getCaegories(category) {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((json) => setproducts(json));
  }

  const handleInputChange = ({ target }) => {
    if (target.value === "all") {
      getInfo();
      return;
    }
    getCaegories(target.value);
  };

  return (
    <div>
      <label htmlFor="categories">By categories </label>
      <select
        className="custom-select"
        name="categories"
        id=""
        onChange={(e) => handleInputChange(e)}
      >
        <option value="all">All</option>
        {categories.map((cat) => (
          <option value={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
};
