import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
//import products from "../assets/fake-data/product";
import ProductCard from "../components/UI/product-card/ProductCard";
import ReactPaginate from "react-paginate";
import product__010 from "../assets/images/product__010.png";
import product_06 from "../assets/images/product_06.png";
import product__08 from "../assets/images/product__08.png";
import product_032 from "../assets/images/product_032.png";
import product_023 from "../assets/images/product_023.png";
import product__014 from "../assets/images/product__014.png";
import "../styles/me-nu.css";
import "../styles/pagination.css";

const Menu = () => {

  //Hiển thị món ăn lên front-end
  // const [foodCat, setFoodCat] = useState([])
  const [foodItem, setFoodItem] = useState([]);

  //Tìm kiếm
  //const [search, setSearch] = useState('');

  const loadData = async () => {
    let response = await fetch("http://localhost:4000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }
    });

    response = await response.json()

    setFoodItem(response[0])
    // setFoodCat(response[1])

  }

  useEffect(() => {
    loadData()
  }, [])



  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [pageNumber, setPageNumber] = useState(0);

  const productPerPage = 8;
  const visitedPage = pageNumber * productPerPage;

  const searchedProduct = foodItem;

  const pageCount = Math.ceil(searchedProduct.length / productPerPage);


  const displayPage = searchedProduct
    .filter((item) => {
      if (selectedCategory === "Tất cả") {
        return true;
      }
      return item.CategoryName === selectedCategory;
    })
    .slice(visitedPage, visitedPage + productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Helmet title="Thực đơn">
      <CommonSection title="THỰC ĐƠN" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="sorting__widget text-end mb-3">
                <button
                  className={selectedCategory === "Gà rán" ? "active" : ""}
                  onClick={() => setSelectedCategory("Gà rán")}
                >
                  <img
                    src={product_023}
                    alt="Gà rán"
                    className="category-image"
                  />
                  Gà rán
                </button>
                <button
                  className={selectedCategory === "Burger" ? "active" : ""}
                  onClick={() => setSelectedCategory("Burger")}
                >
                  <img
                    src={product_032}
                    alt="Burger"
                    className="category-image"
                  />
                  Burger
                </button>
                <button
                  className={selectedCategory === "Pizza" ? "active" : ""}
                  onClick={() => setSelectedCategory("Pizza")}
                >
                  <img
                    src={product__08}
                    alt="Pizza"
                    className="category-image"
                  />
                  Pizza
                </button>
                <button
                  className={selectedCategory === "Thức ăn nhẹ" ? "active" : ""}
                  onClick={() => setSelectedCategory("Thức ăn nhẹ")}
                >
                  <img
                    src={product_06}
                    alt="Thức Ăn Nhẹ"
                    className="category-image"
                  />
                  Thức Ăn Nhẹ
                </button>
                <button
                  className={selectedCategory === "Combo" ? "active" : ""}
                  onClick={() => setSelectedCategory("Combo")}
                >
                  <img
                    src={product__010}
                    alt="Combo"
                    className="category-image"
                  />
                  Combo
                </button>
                <button
                  className={selectedCategory === "Thức uống" ? "active" : ""}
                  onClick={() => setSelectedCategory("Thức uống")}
                >
                  <img
                    src={product__014}
                    alt="Thức uống"
                    className="category-image"
                  />
                  Thức uống
                </button>
              </div>
            </Col>
            {displayPage.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item._id} className="mb-4">
                <ProductCard item={item} />
              </Col>
            ))}
            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel="Prev"
                nextLabel="Next"
                containerClassName="paginationBttns"
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Menu;
