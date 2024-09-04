import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/Trangchu.css";
import image1 from "../assets/images/bannerdau1.png";
import image2 from "../assets/images/banner22.png";
import image3 from "../assets/images/Red Yellow Simple Creative Delicious Ramen Promotion Banner.png";
import shipper from "../assets/images/shipper.png";
import banner__about from "../assets/images/banner__about.png";
import products from "../assets/fake-data/product.js";
import cate1 from "../assets/images/category-01.png";
import cate2 from "../assets/images/category-02.png";
import cate3 from "../assets/images/category-03.png";
import banner__sale from "../assets/images/banner__sale.png";
import banner__sale2 from "../assets/images/banner__sale2.png";
import ProductCard from "../components/UI/product-card/ProductCard";
import banner__tt from "../assets/images/banner__tt.png";
import banner__tt2 from "../assets/images/banner__tt2.png";
import banner__tt3 from "../assets/images/banner__tt3.png";
import banner__tt4 from "../assets/images/banner__tt4.png";
import banner__about2 from "../assets/images/about__banner2.png";
import banner__about3 from "../assets/images/banner__about3.png";
import angi from "../assets/images/angi.png";
const Trangchu = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  return (
    <Helmet title="Trang chủ">
      <section>
        <Carousel
          autoPlay={true}
          showArrows={false}
          showThumbs={false}
          interval={1000}
          infiniteLoop={true}
          className="custom-carousel"
        >
          <div>
            <img src={image1} alt="" />
          </div>
          <div>
            <img src={image2} alt="" />
          </div>
          <div>
            <img src={image3} alt="" />
          </div>
        </Carousel>
      </section>

      <section>
        <Container>
          <Row className="eat">
            <Col lg="3" md="6" className="text__eat">
              <div className="red-background">
                <img src={angi} alt="angi" width="300" height="295" />
              </div>
            </Col>

            {products.slice(0, 3).map((product, index) => (
              <Col lg="3" md="6" key={product.id}>
                <div className="product-card2">
                  <ProductCard item={product} />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row className="banner__sale ">
            {/* Hàng thứ hai với hai cột */}
            <Col lg="6" md="6">
              <Link to="/khuyenmai">
                <img
                  src={banner__sale} // Đường dẫn đến hình ảnh thứ nhất
                  alt="Sale 1"
                  className="w-100"
                />
              </Link>
            </Col>
            <Col lg="6" md="6">
              <Link to="/khuyenmai">
                <img
                  src={banner__sale2} // Đường dẫn đến hình ảnh thứ hai
                  alt="Sale 2"
                  className="w-100"
                />
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={shipper} alt="" className="w-100" />
            </Col>

            <Col lg="6" md="6">
              <div className="why__tuti">
                <h2 className="why__tuti-title mb-4">
                  Tại sao nên chọn<span> TUTI FOOD ?</span>
                </h2>

                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2">
                      <i class="ri-motorbike-line"></i>Vận Chuyển
                    </p>
                    <p className="choose__us-desc">
                      Tiết kiệm thời gian di chuyển khi chúng ta có thể dễ dàng
                      đặt hàng online
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2">
                      <i class="ri-shopping-cart-line"></i>Món Ăn{" "}
                    </p>
                    <p className="choose__us-desc">
                      Tiết kiệm thời gian di chuyển khi chúng ta có thể dễ dàng
                      đặt hàng online
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2">
                      <i class="ri-wallet-3-line"></i>Giá Cả
                    </p>
                    <p className="choose__us-desc">
                      Tiết kiệm thời gian di chuyển khi chúng ta có thể dễ dàng
                      đặt hàng online
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2">
                      <i class="ri-gift-line"></i>Khuyến Mãi
                    </p>
                    <p className="choose__us-desc">
                      Tiết kiệm thời gian di chuyển khi chúng ta có thể dễ dàng
                      đặt hàng online
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/*<section>
        <Container>
          <Row>
            <Col lg="12" className="text__center">
              <h2>Nổi Bật</h2>
            </Col>
            <Col lg="12">
              <div
                className="food__category d-flex align-content-center 
              justify-content-center gap-5"
              >
                <button
                  className={`all__btn  ${
                    category === "ALL" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BURGER" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={cate1} alt="" />
                  Burger
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "PIZZA" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={cate2} alt="" />
                  Pizza
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "CHICKEN" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("CHICKEN")}
                >
                  <img src={cate3} alt="" />
                  Gà rán
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "THỨCĂNNHẸ" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("THỨCĂNNHẸ")}
                >
                  <img src={cate3} alt="" />
                  Thức ăn nhẹ
                </button>
              </div>
            </Col>
            {allProducts.map((item) => (
              <Col lg="3" md="4" key={item.id} className="mt-5">
                <ProductCard item={item} price={`${item.price} VND`} />
              </Col>
            ))}
          </Row>
        </Container>
            </section>*/}

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text__center">
              <h2>NỔI BẬT</h2>
            </Col>
          </Row>
          <Row>
            {allProducts.slice(0, 10).map((item) => (
              <Col lg="3" md="4" key={item.id} className="mt-5">
                <div className="product-card">
                  <ProductCard item={item} price={`${item.price} VND`} />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <div className="about">
        <img src={banner__about3} alt="Banner" width="1000" height="500" />
        <div className="banner-text">
          {/*<h1>
            Với mong muốn sẽ mang đến cho quý khách hàng những món ăn ngon, đa
            dạng. Còn chần chờ gì nữa mà không đặt nhanh món nào
          </h1>
            <p>Hãy đến với chúng tôi</p>*/}
          <button>ĐẶT HÀNG NGAY</button>
        </div>
      </div>

      {/*<div className="about_container">
        <div className="about_image">
          <img src={image4} alt="" />
        </div>
        <div className="about_content">
          <h1>VỀ TUTI</h1>
          <p>
            TUTIFOOD thừa nhận và tôn trọng thông tin bí mật của những cá nhân
            đăng nhập vào trang web của TUTIFOOD. Chính sách này bao gồm thông
            tin cá nhân mà TUTIFOOD và bên nhượng quyền và đại diện các bên
            nhượng quyền của TUTIFOOD muốn sử dụng, quản lý và bảo vệ thông tin
            cá nhân của khách khi đăng nhập hoặc đặt hàng qua trang web
            TUTIFOOD. TUTIFOOD có quyền xem xét lại chính sách bảo mật này theo
            thời gian khi thấy cần thiết, vì vậy hãy thường xuyên kiểm tra thông
            tin cập nhật. Chính sách bảo mật này sẽ áp dụng từ tháng 1 năm 2023
            muốn sử dụng, quản lý và bảo vệ thông tin cá nhân của khách khi đăng
            nhập hoặc đặt hàng qua trang web TUTIFOOD.
          </p>
          <Link to="/gioithieu">
            <button className="about_button">Xem thêm</button>
          </Link>
        </div>
  </div>*/}

      {/*<section>
        <Container>
          <Row>
            <Col lg="12" className="text__center">
              <h2>Nổi Bật</h2>
            </Col>
            <Col lg="12">
              <div
                className="food__category d-flex align-content-center 
              justify-content-center gap-5"
              >
                <button
                  className={`all__btn  ${
                    category === "ALL" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BURGER" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={cate1} alt="" />
                  Burger
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "PIZZA" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={cate2} alt="" />
                  Pizza
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "CHICKEN" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("CHICKEN")}
                >
                  <img src={cate3} alt="" />
                  Gà rán
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "KHAC" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("KHAC")}
                >
                  <img src={cate3} alt="" />
                  Khác
                </button>
              </div>
            </Col>
            {allProducts.map((item) => (
              <Col lg="3" md="4" key={item.id} className="mt-5">
                <ProductCard item={item} price={`${item.price} VND`} />
              </Col>
            ))}
          </Row>
        </Container>
            </section>*/}

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text__km mb-3">
              <h2>TIN TỨC</h2>
              <Link to="/tintuc" className="all__km">
                Xem tất cả<i class="ri-arrow-right-s-fill"></i>
              </Link>
            </Col>
          </Row>

          <Row>
            <Col lg="3" md="6">
              <div
                className="promotion__item "
                style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
              >
                <img src={banner__tt} alt="Khuyến Mãi" className="w-100" />
                <h3>TUTI FOOD TRỞ THÀNH FASTFOOD ĐƯỢC YÊU THÍCH NHẤT</h3>
                <p>21/09/2023</p>
                <button className="view-promotion-button">Xem thêm</button>
              </div>
            </Col>

            <Col lg="3" md="6">
              <div
                className="promotion__item"
                style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
              >
                <img src={banner__tt2} alt="Khuyến Mãi" className="w-100" />
                <h3>TUTI CHO RA MẮT MÓN MỚI VỚI GIÁ DÙNG THỬ CHỈ 20.000VND</h3>
                <p>21/09/2023</p>
                <button className="view-promotion-button">Xem thêm</button>
              </div>
            </Col>

            <Col lg="3" md="6">
              <div
                className="promotion__item"
                style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
              >
                <img src={banner__tt3} alt="Khuyến Mãi" className="w-100" />
                <h3>TUYỂN NHÂN VIÊN BẮT ĐẦU TỪ THÁNG 11 TẠI TUTI</h3>
                <p>21/09/2023</p>
                <button className="view-promotion-button">Xem thêm</button>
              </div>
            </Col>

            <Col lg="3" md="6">
              <div
                className="promotion__item"
                style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
              >
                <img src={banner__tt4} alt="Khuyến Mãi" className="w-100" />
                <h3>RA MẮT CHI NHÁNH MỚI TẠI QUẬN 12</h3>
                <p>21/09/2023</p>
                <button className="view-promotion-button">Xem thêm</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Trangchu;
