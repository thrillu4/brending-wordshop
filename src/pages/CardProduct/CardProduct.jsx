import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts } from "../../redux/actions/productActions";

function CardProduct() {
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(product);
  const fetchCardProduct = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log("Error", err));
    dispatch(selectedProducts(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchCardProduct();
  }, [productId]);
  return <div>CardProduct</div>;
}

export default CardProduct;
