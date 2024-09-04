import React from "react";
import ProductBox from "../components/UI/product-detail/ProductBox";
import "../styles/food-detail.css";

import ListImageDetail from "../components/UI/product-detail/ListImageDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartAction } from "../store/shopping-cart/cartSlice";
import { v4 as uuidv4 } from 'uuid';

const FoodDetails = () => {
  //Hiển thị món ăn lên front-end
  const [foodItem, setFoodItem] = useState([]);
  const { id } = useParams();
  const [img, setImg] = useState();
  const [productDetail, setProductDetail] = useState();
  const [showCartMessage, setShowCartMessage] = useState(false);
  const [listImg, setListImg] = useState();
  const dispatch = useDispatch();


  const loadData = async () => {
    let response = await fetch("http://localhost:4000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();
    setFoodItem([...response[0]]);
  };

  const getDetailProduct = () => {
    const result = foodItem.find((item) => String(item._id) === String(id));

    if (result) {
      setListImg([result.img, result.img03, result.img02]);
      setProductDetail(result);
    } else {
      console.log("Không có dữ liệu từ API: ", result);
    }
  };

  const addToCart = () => {
    dispatch(
      cartAction.addItem({
        _id: productDetail?._id || uuidv4(),
        name: productDetail?.name,
        img: productDetail?.img,
        price: productDetail?.price,
      })
    );
    // Hiển thị thông báo
    setShowCartMessage(true);
    // Tắt thông báo sau 2 giây
    setTimeout(() => {
      setShowCartMessage(false);
    }, 2000);
  };

  useEffect(() => {
    loadData();
  }, []);
  useEffect(() => {
    getDetailProduct();
  }, [foodItem, id]);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const idx = getRandomInt(5);

  return (
    <div id="detail">
      <div className="container-detail">
        <div className="container-detail__left">
          <div className="container-detail__left-img">
            <img
              className="container-left_img"
              src={img || productDetail?.img || ""}
              alt=""
            />
          </div>
          <ListImageDetail listImg={listImg} setImg={setImg} />
        </div>
        <div className="container-detail__right">
          <div className="container-right__title">{productDetail?.name}</div>
          <div className="container-right__price">
            {productDetail?.price} VND
          </div>

          <div className="container-right__btn">
            <div className="btn-add__cart" onClick={addToCart}>
              Thêm vào giỏ hàng
            </div>
          </div>

          <div className="container-right__des">
            <div className="btn-content title d-flex justify-space-between">
              <div style={{ marginRight: "150px" }}>Mô tả</div>
            </div>
            <div className="main-content">
              <div style={{ margin: "8px 0", textAlign: "justify" }}>
                {" "}
                {productDetail?.description}.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hiển thị thông báo khi thêm vào giỏ hàng thành công */}
      {showCartMessage && (
        <div className="cart-message">
          <i class="ri-checkbox-circle-line"></i> Thêm vào giỏ hàng thành công !
        </div>
      )}
      <div
        style={{
          fontSize: "25px",
          padding: "16px 0",
          borderBottom: "1px solid #ccc",
          fontWeight: "500",
          margin: "140px 16px 32px",
        }}
      >
        Sản phẩm nổi bật
      </div>
      <div className="product-suggest d-flex justify-space-between">
        {foodItem.slice(idx, idx + 4).map((item) => {
          return (
            <ProductBox
              id={item._id}
              title={item.name}
              des={item.description.slice(0, 100)}
              img={item.img}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FoodDetails;
