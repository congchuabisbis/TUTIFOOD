import React, { useState } from "react";

import { Link } from "react-router-dom";

import "../../../styles/product-card.css";

import { useDispatch } from "react-redux";
import { cartAction } from "../../../store/shopping-cart/cartSlice";

const ProductCard = (props) => {
  const { _id, name, img, description, price } = props.item;
  const dispatch = useDispatch();
  const [cartMessage, setCartMessage] = useState("");

  const addToCart = () => {
    dispatch(
      cartAction.addItem({
        _id,
        name,
        img,
        description,
        price
      })
    );
    setCartMessage(" Thêm vào giỏ hàng thành công !");
    setTimeout(() => {
      setCartMessage("");
    }, 500);
  };

  return (
    <div className="product__item">
      <div className="product__img">
        <img src={img} alt="" className="w-50" />
      </div>

      <div className="product__content">
        <h5>
          <Link to={`/foods/${_id}`} style={{ "color": "black", "text-decoration": "none" }}>
            {name}
          </Link>

        </h5>
        <span className="product__mota">{description}</span>
        <div className="d-flex align-items-center justify-content-between">
          <span className="product__price">{price} VND</span>
          <button className="addTOCart__btn" onClick={addToCart}>
            <i class="ri-shopping-cart-2-line"></i>
          </button>
        </div>
        {/* Hiển thị thông báo giỏ hàng */}
        {cartMessage && (
          <div className="cart-message">
            <i class="ri-checkbox-circle-line"></i> {cartMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
