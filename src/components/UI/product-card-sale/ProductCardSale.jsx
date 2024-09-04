import React from "react";

import { Link } from "react-router-dom";

import "../../../styles/product-card.css";
import "../../../styles/product-card-sale.css";

import { useDispatch } from "react-redux";
import { cartAction } from "../../../store/shopping-cart/cartSlice";

const ProductCardSale = (props) => {
  const { id, title, image01, price } = props.item;
  const priceSale = 100000;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartAction.addItem({
        id,
        title,

        image01,
      })
    );
  };

  return (
    <div className="product__item_sale">
      <h3 class="sale-sticky">Sale</h3>
      <div className="product__img_sale">
        <img src={image01} alt="" className="w-50" />
      </div>

      <div className="product__content_sale">
        <h5>
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
        <div style={{ textAlign: "left", fontSize: "18px" }}>
          <strike>{priceSale.toLocaleString()} VNĐ</strike>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <span className="product__price_sale">{price}</span>

          <button className="addTOCart__btn_sale" onClick={addToCart}>
            <i class="ri-shopping-cart-2-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSale;
