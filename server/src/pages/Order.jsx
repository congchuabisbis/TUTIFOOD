import React, { useEffect, useState } from "react";

const Order = () => {
  const [orderData, setorderData] = useState({});

  const fetchMyOrder = async () => {

    await fetch("http://localhost:4000/api/myOrderData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem("userEmail"),
      }),
    }).then(async (res) => {
      let response = await res.json();

      await setorderData(response);
    });


  };


  useEffect(() => {
    fetchMyOrder();
  }, []);



  return (
    <div>

      <div className="container">
        <div className="row">
          {Object.keys(orderData).length > 0 ? (
            <>
              {/* Thông tin đơn hàng và địa chỉ người nhận hàng */}
              <div>
                <h3>Thông tin đơn hàng</h3>
                {/* Mới sửa đc bug */}
                <p>Họ và tên: {orderData.orderData.fullName}</p>
                <p>Email: {orderData.orderData.email}</p>
                <p>Số điện thoại: {orderData.orderData.phoneNumber}</p>
                <p>
                  Địa chỉ: {orderData.orderData.address},{" "}
                  {orderData.orderData.ward}, {orderData.orderData.district},{" "}
                  {orderData.orderData.city}
                </p>
                <p>Ghi chú: {orderData.orderData.note}</p>
              </div>

              {/* Chi tiết đơn hàng */}
              <div>
                <h3>Chi tiết đơn hàng</h3>
                {orderData.orderData.order_data &&

                  orderData.orderData.order_data.map((item, index) => {
                    
                    if (index === 0 && !item.length) {
                      return null; // Bỏ qua phần tử đầu tiên nếu không có dữ liệu
                    }
                    return (
                      <div key={index}>
                        <h4>Ngày đặt hàng: {item[0]?.Order_date}</h4>
                        {/* Hiển thị mỗi sản phẩm trong đơn hàng */}
                        {item.slice(1).map((arrayData, arrayIndex) => (
                          <div key={arrayIndex}>
                            <div key={arrayData._id}>
                              <div className="col-12 col-md-6 col-lg-3">
                                <div
                                  className="card mt-3"
                                  style={{ width: "16rem", maxHeight: "360px" }}
                                >
                                  <div className="card-body">
                                    <h5 className="card-title">
                                      {arrayData.name}
                                    </h5>
                                    <div
                                      className="container w-100 p-0"
                                      style={{ height: "38px" }}
                                    >
                                      <span className="m-1">
                                        Số lượng: {arrayData.quantity}
                                      </span>

                                      <div className="d-inline ms-2 h-100 w-20 fs-5">
                                        Giá: {arrayData.price}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    );
                  })
                }

              </div>

              {/* Tổng số tiền và trạng thái đơn hàng */}
              <div>
                <h3>Tổng số tiền và trạng thái đơn hàng</h3>
                <p>Tổng số tiền: {orderData.orderData.total_amount}</p>
                <p>Trạng thái: {orderData.orderData.status}</p>
              </div>
            </>
          ) : (
            <p>Không có thông tin đơn hàng</p>
          )}
        </div>
      </div>


    </div>
  );
}

export default Order