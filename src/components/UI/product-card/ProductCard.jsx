import React, { useState } from "react";

import { Link } from "react-router-dom";

import "../../../styles/product-card.css";

import { useDispatch } from "react-redux";
import { cartAction } from "../../../store/shopping-cart/cartSlice";

const ProductCard = (props) => {
  const { id, title, mota, image01, price } = props.item;
  const dispatch = useDispatch();
  const [cartMessage, setCartMessage] = useState("");

  const addToCart = () => {
    dispatch(
      cartAction.addItem({
        id,
        title,
        price,
        mota,
        image01,
      })
    );
  };
  return (
    <div className="product__item">
      <div className="product__img">
        <img src={image01} alt="" className="w-50" />
      </div>

      <div className="product__content">
        <h5>
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
        <span className="product__mota">{mota}</span>
        <div
          className="d-flex align-items-center
        justify-content-between"
        >
          <span className="product__price">{price}</span>
          <button className="addTOCart__btn" onClick={addToCart}>
            <i class="ri-shopping-cart-2-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
