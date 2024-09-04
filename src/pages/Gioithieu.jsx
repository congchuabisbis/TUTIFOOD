import React from 'react';
import products from '../assets/fake-data/product.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../styles/gioithieu.css";
import ProductCardSale from '../components/UI/product-card-sale/ProductCardSale';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

const Gioithieu = () => {
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <div>
      <Container>
        <div className='about-us'>
          <h1>VỀ TuTi</h1>
          <p>TUTIFOOD  thừa nhận và tôn trọng thông tin bí mật của những cá nhân đăng nhập vào trang web của TUTIFOOD.
            Chính sách này bao gồm thông tin cá nhân mà TUTIFOOD và bên nhượng quyền và đại diện các bên nhượng quyền của TUTIFOOD
            muốn sử dụng, quản lý và bảo vệ thông tin cá nhân của khách khi đăng nhập hoặc đặt hàng qua trang web TUTIFOOD.
            TUTIFOOD có quyền xem xét lại chính sách bảo mật này theo thời gian khi thấy cần thiết,
            vì vậy hãy thường xuyên kiểm tra thông tin cập nhật. Chính sách bảo mật này sẽ áp dụng từ tháng 1 năm 2023 muốn sử dụng,
            quản lý và bảo vệ thông tin cá nhân của khách khi đăng nhập hoặc đặt hàng qua trang web TUTIFOOD.
            quản lý và bảo vệ thông tin cá nhân của khách khi đăng nhập hoặc đặt hàng qua trang web TUTIFOOD...</p>
        </div>
        <div className='list-advantage'>
          <div><h2>Vì sao bạn nên Order trên TuTiFood?</h2></div>
          <ul>
            <li className='advantage'><span >&emsp;<b>Nhanh nhất</b> - TuTiFood cung cấp dịch vụ giao đồ ăn nhanh nhất thị trường.</span></li>
            <li className='advantage'><span >&emsp;<b>Dễ dàng nhất</b> - Giờ đây, bạn chỉ cần thực hiện vài cú nhấp chuột hoặc chạm nhẹ là đã có thể đặt đồ ăn</span></li>
            <li className='advantage'><span >&emsp;<b>Đáp ứng mọi nhu cầu</b> - Từ món ăn đặc sản địa phương đến các nhà hàng được ưa thích, nhiều lựa chọn đa dạng chắc chắn sẽ
              luôn làm hài lòng khẩu vị của bạn.</span></li>
            <li className='advantage'><span>&emsp;<b>Thanh toán dễ dàng</b> - Giao và nhận đồ ăn thật dễ dàng. Thanh toán bằng GrabPay thậm chí còn dễ dàng hơn nữa.</span></li>
            <li className='advantage'><span>&emsp;<b>Nhiều quà tặng hơn</b> - Tích điểm GrabRewards cho mỗi đơn hàng của bạn và sử dụng điểm thưởng để đổi lấy nhiều ưu đãi hơn.</span></li>
          </ul>
        </div>
      </Container>
      <div className='slider-sale'>
        <div className='slider-sale-container'>
          <div className='slider-sale-header'>
            <span className='slider-sale-title'>Sản phẩm khuyến mãi</span>
            <button className='slider-sale-btn'>Xem Thêm</button>
          </div>
          <div className='slider-sale-body'>
            <Slider {...settings}>
              {products && products.length > 0 &&
                products.map((item, index) => {
                  return (
                    <div className='slider-sale-customize' key={index}>
                      <ProductCardSale item={item} price={`${item.price} VND`} />
                    </div>
                  )
                })
              }
            </Slider>
          </div>
        </div>
      </div>

      <Container>
        <div className='question'>
          <h2>Những câu hỏi thường gặp</h2>
          <br></br>
          <h3>TuTiFood có cung cấp dịch vụ giao đồ ăn 24x7 không?</h3>
          <p>
            Chúng tôi chỉ biết một điều duy nhất, đó là "đồ ăn", vậy nên tất nhiên chúng tôi cung cấp dịch vụ này rồi.
            Xin lưu ý, mặc dù chúng tôi là đối tác giao đồ ăn phục vụ 24x7, nhưng một số nhà hàng trong danh mục của chúng tôi có
            thể hạn chế giao đồ ăn khuya hoặc có thể không phục vụ đối với các đơn đặt hàng. Tuy nhiên, chúng tôi đã liệt kê danh
            sách những nhà hàng phục vụ nhu cầu ăn khuya của bạn trong mục Late Night Delivery (Giao hàng khuya).</p>
          <hr />
          <h3>TuTiFood có chấp nhận tiền mặt không?</h3>
          <p>Tất nhiên là có! TuTiFood chấp nhận mọi hình thức thanh toán cho dịch vụ giao đồ ăn, bao gồm cả tiền mặt khi giao hàng tại Việt Nam.</p>
          <hr />
          <h3>TuTiFood tính phí giao đồ ăn như thế nào?</h3>
          <p>Phí giao hàng của chúng tôi phụ thuộc vào nhiều yếu tố hoạt động như khoảng cách từ vị trí của bạn đến nhà hàng.
            Bạn có thể kiểm tra phí giao hàng chính xác cần phải trả trước khi thanh toán tại mục thanh toán trên ứng dụng TuTi.
            Ngoài ra còn có phần “Free Delivery” (Giao hàng miễn phí) liệt kê các nhà hàng gần chỗ bạn mà không tính phí giao hàng.</p>
        </div>
      </Container>
    </div>

  );
}

export default Gioithieu