import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Catalog() {
  const products = useSelector((state) => state.allProducts.products);
  console.log(products);
  const renderList = products.map((product) => {
    const { id, title, price, category, description, image } = product;
    return (
      <div key={id}>
        <Link to={`/product/${id}`}>
          <div>
            <div>
              <img src={image} alt={title} />
            </div>
            <div>
              <div>{title}</div>
              <div>{price}</div>
              <div>{category}</div>
              <div>{description}</div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
}

export default Catalog;
