import React from 'react';
import {Container, Row, Col, ListGroup, ListGroupItem} from "reactstrap";
import logo from "../../assets/images/logo.png";

import "../../styles/footer.css";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg="1" md="4" sm="6">
            <div className="logo footer__logo text-start">
              <img src={logo} alt="logo"/>
              
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
          <h5 className='footer__tittle'>TUTI SHOP</h5>
          <ListGroup className='deliver__time-list'>
          <ListGroupItem className='delivery__time-item1 border-0 ps-0'>
          <p><i class="ri-map-pin-line"> </i> 381 Sư Vạn Hạnh Phường 12 Quận 10</p> 
          </ListGroupItem>

          <ListGroupItem className='delivery__time-item1 border-0 ps-0'>
          <p><i class="ri-phone-line"> </i>(028) 7825786</p>
          </ListGroupItem>

          <ListGroupItem className='delivery__time-item1 border-0 ps-0'>
          <p><i class="ri-mail-line"> </i>foodtuti@gmail.com.vn</p>
          </ListGroupItem>
          </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className='footer__tittle'>THỜI GIAN HOẠT ĐỘNG</h5>
            <ListGroup className='deliver__time-list'>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Thứ Hai - Thứ Sáu</span>
                <p>8:00 - 22:00</p>
              </ListGroupItem>

              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Thứ Bảy - Chủ Nhật</span>
                <p>8:00 - 23:00</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="2" md="4" sm="6">
          <h5 className='footer__tittle'>THÔNG TIN</h5>
            <ListGroup className='deliver__time-list'>
              <ListGroupItem className='delivery__time-item2 border-0 ps-0'>
                <a href='/home'>Trang Chủ</a>
              </ListGroupItem>

              <ListGroupItem className='delivery__time-item2 border-0 ps-0'>
                <a href='/gioithieu'>Giới Thiệu</a>
              </ListGroupItem>
           
              <ListGroupItem className='delivery__time-item2 border-0 ps-0'>
                <a href='/menu'>Thực Đơn</a>
              </ListGroupItem>

              <ListGroupItem className='delivery__time-item2 border-0 ps-0'>
                <a href='/khuyenmai'>Khuyến Mãi</a>
              </ListGroupItem>

              <ListGroupItem className='delivery__time-item2 border-0 ps-0'>
                <a href='/contact'>Liên Hệ</a>
              </ListGroupItem>
            </ListGroup>
          </Col>


          <Col lg="3" md="4" sm="6">
            <h5 className='footer__tittle'>NHẬN THÔNG BÁO</h5>
            <p>Đăng ký để nhận ngay thông báo mới</p>
            <div className='newsletter'>
              <input type='email' placeholder='Nhập email của bạn'/>
              <span><i class="ri-send-plane-line"></i></span>
            </div>
          </Col>
        </Row>

        <Row className='mt-5'>
        <Col lg="6" md="6">
          <p className='crights'>Copyright - 2023 TUTI FOOD Viet Nam. All Rights Reserved.
          </p>
        </Col>

        <Col lg="6" md="6">
      <div className='social__links d-flex align-items-center 
      gap-4 justify-content-end'>
          <p className='m-0'>Theo dõi chúng tôi: </p>
          <span>
            {" "}
            <Link to ='https://www.facebook.com/hongnhung546'>
            <i class="ri-facebook-line"></i>
            </Link>{" "}
            </span>

        <span>
          <Link to ='https://www.instagram.com/congchuabisbis/'>
        <i class="ri-instagram-line"></i>
        </Link>
        </span>

        <span>
          <Link to ='https://www.instagram.com/congchuabisbis/'>
          <i class="ri-youtube-line"></i>
        </Link>
        </span>

        </div>
        </Col>

        </Row>
      </Container>
    </footer>
  )
}

export default Footer