import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/productActions";
import Catalog from "../Catalog/Catalog";

const Home = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log("Err", err));
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  // console.log("Products: ", products);
  return (
    <div>
      <h1>Home</h1>
      <div className="">
        <Catalog />
      </div>
    </div>
  );
};

export default Home;
