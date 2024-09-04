import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
import "../styles/dathang.css";
import address from "../assets/fake-data/address";
import { useNavigate } from 'react-router-dom';
import { cartAction } from "../store/shopping-cart/cartSlice";

const Checkout = () => {
    const navigate = useNavigate();
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [cities, setCities] = useState(address.cities);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [selectedCity, setSelectedCity] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [selectedWard, setSelectedWard] = useState("");
    const [fullNameBlurred, setFullNameBlurred] = useState(false);
    const [fullNameFocused, setFullNameFocused] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [cityBlurred, setCityBlurred] = useState(false);
    const [addressError, setAddressError] = useState(false);
    const [districtBlurred, setDistrictBlurred] = useState(false);
    const [wardBlurred, setWardBlurred] = useState(false);
    const [addressBlurred, setAddressBlurred] = useState(false);
    const [addressFocused, setAddressFocused] = useState(false);
    const [orderSent, setOrderSent] = useState(false);
    const [redirecting, setRedirecting] = useState(false);

    const handleContinueShopping = () => {
        window.history.back(); // Navigate back to the previous page
    };
    const dispatch = useDispatch();
    const [orderSummary, setOrderSummary] = useState({
        totalQuantity: 0,
        totalAmount: 0,
        shippingFee: 0,
    });
    const cartItems = useSelector((state) => state.cart.cartItems);

    const [customerInfo, setCustomerInfo] = useState({
        fullName: "",
        phoneNumber: "",
        address: "",
        city: "",
        district: "",
        ward: "",
        status: "Chờ xử lý",
        note: "",
    });


    const handleCityChange = (e) => {
        const selectedCity = e.target.value;
        setSelectedCity(selectedCity);
        // Cập nhật giá trị của customerInfo.city
        setCustomerInfo((prevCustomerInfo) => ({
            ...prevCustomerInfo,
            city: selectedCity,
        }));
        // Cập nhật danh sách quận dựa trên thành phố được chọn
        const districtsForCity = address.districts[selectedCity] || [];
        setDistricts(districtsForCity);
        // Đặt lại giá trị quận và phường đã chọn
        setSelectedDistrict("");
        setSelectedWard("");
    };

    const handleDistrictChange = (e) => {
        const selectedDistrict = e.target.value;
        setSelectedDistrict(selectedDistrict);
        setCustomerInfo((prevCustomerInfo) => ({
            ...prevCustomerInfo,
            district: selectedDistrict,
        }));
        // Cập nhật danh sách phường dựa trên quận được chọn
        const wardsForDistrict = address.wards[selectedDistrict] || [];
        setWards(wardsForDistrict);
        // Đặt lại giá trị phường đã chọn
        setSelectedWard("");
    };

    const handleWardChange = (e) => {
        const selectedWard = e.target.value;
        setSelectedWard(selectedWard);
        setCustomerInfo((prevCustomerInfo) => ({
            ...prevCustomerInfo,
            ward: selectedWard,
        }));
    };

    const validate = (customerInfo) => {
        const errors = {};

        // Kiểm tra trường bắt buộc
        if (!customerInfo.fullName.trim()) {
            errors.fullName = "Vui lòng nhập họ tên.";
        }
        if (!customerInfo.city) {
            errors.city = "Vui lòng chọn thành phố.";
        }
        if (!customerInfo.district) {
            errors.district = "Vui lòng chọn quận";
        }
        if (!customerInfo.ward) {
            errors.ward = "Vui lòng chọn phường/huyện";
        }
        if (!customerInfo.phoneNumber.trim()) {
            errors.phoneNumber = "Vui lòng nhập số điện thoại.";
        }
        if (!customerInfo.address.trim()) {
            errors.address = "Vui lòng nhập địa chỉ.";
        }

        const numericPhone = customerInfo.phoneNumber.replace(/\D/g, "");
        // Kiểm tra số điện thoại có 10 chữ số, bắt đầu từ số 0
        if (!(numericPhone.length === 10 && numericPhone.startsWith("0"))) {
            errors.phoneNumber =
                "Số điện thoại phải có 10 chữ số và bắt đầu từ số 0.";
        }

        return errors;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Ẩn thông báo lỗi khi người dùng bắt đầu nhập
        setFormSubmitted(false);

        if (name === "district") {
            setDistrictBlurred(true);
        } else if (name === "ward") {
            setWardBlurred(true);
        }

        if (name === "district") {
            handleDistrictChange(e);
        } else if (name === "phoneNumber") {

            // Cho phép chỉ ký tự số
            const numericValue = value.replace(/\D/g, "");
            // Kiểm tra số điện thoại có 10 chữ số và bắt đầu từ số 0
            setPhoneError(
                !(numericValue.length === 10 && numericValue.startsWith("0"))
            );
            setCustomerInfo((prevCustomerInfo) => ({
                ...prevCustomerInfo,
                [name]: numericValue,
            }));
        } else {
            setCustomerInfo((prevCustomerInfo) => ({
                ...prevCustomerInfo,
                [name]: value,
            }));
        }
    };






    //Xử lý khi hoàn tất đặt hàng 
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (cartItems.length === 0) {
            setErrorMessage("Giỏ hàng của bạn đang trống.");
            setFormSubmitted(true);
            return;
        }
        // Kiểm tra xem các trường yêu cầu đã được điền đầy đủ chưa
        const validationErrors = validate(customerInfo);

        if (Object.keys(validationErrors).length > 0) {
            // Nếu có lỗi, hiển thị thông báo lỗi và ngăn chặn việc gửi đơn hàng
            setErrorMessage("Vui lòng điền đầy đủ thông tin yêu cầu.");
            setFormSubmitted(true);
            return;
        }
        let userEmail = localStorage.getItem("userEmail");
        try {
            // Tính tổng tiền bao gồm phí vận chuyển
            const totalAmountWithShipping = orderSummary.totalAmount + orderSummary.shippingFee;
            let response = await fetch("http://localhost:4000/api/orderData", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    order_data: cartItems.map((item) => ({
                        _id: item._id,
                        name: item.name,
                        price: item.price,
                        quantity: item.quantity,
                        totalPrice: item.price * item.quantity + orderSummary.shippingFee,
                    })),
                    email: userEmail,
                    order_date: new Date().toDateString(),
                    total_amount: totalAmountWithShipping,
                    ...customerInfo,
                }),
            });
            console.log("Order Response: ", response);
            if (response.ok) {
                dispatch(cartAction.clearCart());
                setOrderSent(true); // Đặt orderSent thành true

                // Bắt đầu động hồ ẩn thông báo sau 2 giây và chuyển hướng sau 2.5 giây
                setTimeout(() => {
                    setOrderSent(false);
                    setRedirecting(true);
                    setTimeout(() => {
                        setRedirecting(false);
                        navigate("/"); // Chuyển hướng về trang chủ
                    }, 500); // 0.5 giây sau khi ẩn thông báo
                }, 1000);
            } else {
                console.error("Đã xảy ra lỗi khi đặt hàng:", response.statusText);
            }
        } catch (error) {
            console.error("Đã xảy ra lỗi khi gọi API:", error.message);
        }
    };
    useEffect(() => {
        if (redirecting) {
            navigate("/"); // Chuyển hướng về trang chủ
        }
    }, [redirecting]);
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
                <h2 className="checkout-title">Thông tin thanh toán</h2>
                <Row>
                    <Col md={6}>
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <div className="form-group5">
                                    <label2 htmlFor="hoten">
                                        <i class="ri-user-3-fill"></i>
                                    </label2>
                                    <input
                                        type="text"
                                        placeholder="Họ tên"
                                        name="fullName"
                                        value={customerInfo.fullName}
                                        onChange={handleInputChange}
                                        onBlur={() => {
                                            setFullNameBlurred(true);
                                            setFullNameFocused(false);
                                        }}
                                        onFocus={() => setFullNameFocused(true)}
                                    />
                                    {!customerInfo.fullName &&
                                        (formSubmitted || fullNameBlurred) && (
                                            <div className="error-message">Vui lòng nhập họ tên.</div>
                                        )}
                                </div>
                            </FormGroup>

                            <FormGroup>
                                <div className="form-group5">
                                    <label2 htmlFor="Number">
                                        <i class="ri-phone-line"></i>
                                    </label2>
                                    <input
                                        type="tel"
                                        placeholder="Số điện thoại"
                                        name="phoneNumber"
                                        value={customerInfo.phoneNumber}
                                        onChange={handleInputChange}
                                        onBlur={() =>
                                            setPhoneError(customerInfo.phoneNumber.length !== 10)
                                        }
                                    />
                                    {phoneError && (
                                        <div className="error-message">
                                            Số điện thoại phải có 10 chữ số và bắt đầu từ số 0.
                                        </div>
                                    )}

                                    {formSubmitted && !customerInfo.phoneNumber && (
                                        <div className="error-message">
                                            Vui lòng nhập số điện thoại.
                                        </div>
                                    )}
                                </div>
                            </FormGroup>

                            <FormGroup>
                                <div className="form-group5">
                                    <label2 htmlFor="address">
                                        <i className="ri-building-fill"></i>
                                    </label2>
                                    <select
                                        name="city"
                                        value={selectedCity}
                                        onChange={handleCityChange}
                                        onBlur={() => setCityBlurred(true)}
                                    >
                                        <option value="" disabled>
                                            Chọn Thành Phố
                                        </option>
                                        {cities.map((city) => (
                                            <option key={city} value={city}>
                                                {city}
                                            </option>
                                        ))}
                                    </select>
                                    {!customerInfo.city && (formSubmitted || cityBlurred) && (
                                        <div className="error-message">
                                            Vui lòng chọn thành phố.
                                        </div>
                                    )}
                                </div>
                            </FormGroup>

                            <FormGroup>
                                <div className="form-group5">
                                    <label2 htmlFor="address">
                                        <i className="ri-map-2-line"></i>
                                    </label2>
                                    <select
                                        name="district"
                                        value={customerInfo.district}
                                        onChange={handleInputChange}
                                        onBlur={() => setDistrictBlurred(true)}
                                    >
                                        <option value="" disabled>
                                            Chọn Quận
                                        </option>
                                        {districts.map((district) => (
                                            <option key={district} value={district}>
                                                {district}
                                            </option>
                                        ))}
                                    </select>
                                    {!customerInfo.district &&
                                        (formSubmitted || districtBlurred) && (
                                            <div className="error-message">Vui lòng nhập quận.</div>
                                        )}
                                </div>
                            </FormGroup>

                            <FormGroup>
                                <div className="form-group5">
                                    <label2 htmlFor="address">
                                        <i className="ri-map-2-line"></i>
                                    </label2>
                                    <select
                                        name="ward"
                                        value={customerInfo.ward}
                                        onChange={handleWardChange}
                                        onBlur={() => setWardBlurred(true)}
                                    >
                                        <option value="" disabled>
                                            Chọn Huyện/Phường
                                        </option>
                                        {wards.map((ward) => (
                                            <option key={ward} value={ward}>
                                                {ward}
                                            </option>
                                        ))}
                                    </select>
                                    {!customerInfo.ward && (formSubmitted || wardBlurred) && (
                                        <div className="error-message">
                                            Vui lòng nhập phường/huyện.
                                        </div>
                                    )}
                                </div>
                            </FormGroup>

                            <FormGroup>
                                <div className="form-group5">
                                    <label2 htmlFor="address">
                                        <i class="ri-pushpin-2-line"></i>
                                    </label2>
                                    <input
                                        type="text"
                                        placeholder="Địa chỉ"
                                        name="address"
                                        value={customerInfo.address}
                                        onChange={handleInputChange}
                                        onBlur={() => {
                                            setAddressError(!customerInfo.address.trim());
                                            setAddressBlurred(true); // Move this line to onBlur
                                            setAddressFocused(false);
                                        }}
                                        onFocus={() => setAddressFocused(true)}
                                    />
                                    {!customerInfo.address &&
                                        (formSubmitted || addressBlurred) && (
                                            <div className="error-message">
                                                Vui lòng nhập địa chỉ.
                                            </div>
                                        )}
                                </div>
                            </FormGroup>

                            <FormGroup>
                                <div className="form-group5">
                                    <label htmlFor="address"></label>
                                    <textarea
                                        rows="5"
                                        placeholder="Ghi chú"
                                        name="note"
                                        value={customerInfo.note}
                                        onChange={handleInputChange}
                                    ></textarea>
                                </div>
                            </FormGroup>
                        </Form>
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
                                    Quay lại giỏ hàng
                                </button>
                            </div>
                            <div className="buttoncheckout">
                                <Link to="/" onClick={handleSubmit} className="checkout-button">
                                    Hoàn tất đặt hàng
                                </Link>

                            </div>
                        </div>
                        {orderSent && (
                            <div className="message-order">
                                <i class="ri-shopping-bag-3-line"></i>
                                Đơn hàng đã được gửi đi
                            </div>
                        )}
                        {errorMessage && <div className="error-nocart">{errorMessage}</div>}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Checkout;
