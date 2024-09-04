import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartAction } from "../store/shopping-cart/cartSlice";
import CartItem from "../components/UI/cart/CartItem";
import "../styles/checkout.css";
import { Container, Row, Col } from "reactstrap";

const Checkout = () => {
  const handleContinueShopping = () => {
    window.history.back(); // Navigate back to the previous page
  };
  const [orderSummary, setOrderSummary] = useState({
    totalQuantity: 0,
    totalAmount: 0,
    shippingFee: 0,
  });
  const cartItems = useSelector((state) => state.cart.cartItems);


  // Định nghĩa hàm tính phí vận chuyển
  const calculateShippingFee = (totalAmount) => {
    if (totalAmount < 100) {
      return 20; // Phí vận chuyển 20,000 VND nếu total < 100
    } else if (totalAmount >= 100 && totalAmount < 200) {
      return 10; // Phí vận chuyển 10,000 VND nếu total >= 100 và < 200
    } else {
      return 0; // Phí vận chuyển 0 VND nếu total >= 200
    }
  };

  useEffect(() => {
    let totalQuantity = 0;
    let totalAmount = 0;
    cartItems.forEach((item) => {
      totalQuantity += item.quantity;
      totalAmount += (item.discountedPrice || item.price) * item.quantity;
    });

    // Tính phí vận chuyển sử dụng hàm calculateShippingFee
    const shippingFee = calculateShippingFee(totalAmount);

    setOrderSummary({
      totalQuantity,
      totalAmount,
      shippingFee,
    });
  }, [cartItems]);

  return (
    <section>
      <Container>
        <h2 className="cart-title">Thông tin đơn hàng</h2>
        <Row>
          <Col md={6}>
            <div className="cart-list">
              {cartItems.map((item) => (
                <CartItem key={item._id} item={item} />
              ))}
            </div>
          </Col>
          <Col md={6}>
            <div className="order-summary">
              <h2>Tóm tắt đơn hàng</h2>
              <div className="summary-grid">
                <div className="left-col">
                  <p>Tổng số lượng:</p>
                  <p>Tạm tính:</p>
                  <p>Phí vận chuyển:</p>
                  <p>Tổng cộng:</p>
                </div>
                <div className="right-col">
                  <p>{orderSummary.totalQuantity}</p>
                  <p>
                    {orderSummary.totalAmount.toLocaleString("vi-VN")}.000 VND
                  </p>
                  <p>
                    {orderSummary.shippingFee === 0
                      ? "Miễn phí"
                      : `${orderSummary.shippingFee.toLocaleString(
                          "vi-VN"
                        )}.000 VND`}
                  </p>
                  <p>
                    {(
                      orderSummary.totalAmount + orderSummary.shippingFee
                    ).toLocaleString("vi-VN")}
                    .000 VND
                  </p>
                </div>
              </div>
            </div>
            <div className="button-container">
              <div className="buttoncontinue">
                <button
                  className="continue-button"
                  onClick={handleContinueShopping}
                >
                  Tiếp tục mua sắm
                </button>
              </div>
              <div className="buttoncheckout">
                <Link to="/dathang" className="checkout-button">
                  Thanh Toán
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Checkout;
