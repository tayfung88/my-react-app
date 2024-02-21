// src > components > Product.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/apip/productss?page=1").then((response) => {
      setProducts(response?.data["hydra:member"]);
    });
  }, []);

  return (
    <div>
    <h2>Products :</h2>
    {Array.isArray(products) && products.map((item, i) => (
        <div key={i}>
          <p>{item?.name}</p>
        </div>
      ))}
  </div>
);
}

export default Products;