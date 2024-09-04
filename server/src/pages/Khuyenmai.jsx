import React from 'react';
import { Container, Row, Col} from 'reactstrap';
import ProductCardSale from '../components/UI/product-card-sale/ProductCardSale';

import "../styles/khuyenmai.css";
import CommonSection from '../components/UI/common-section/CommonSection';
import { useEffect, useState } from 'react';

const Khuyenmai = () => {

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

  return (
    <div>
      <CommonSection title='KHUYẾN MÃI' />
      <Container>
        <div className='sale-page'>
          <Row>
            {
              foodItem.map((item) => (
                <Col lg="3" md="4" key={item._id} className="mt-5">
                  <ProductCardSale item={item} price={`${item.price} VND`} />
                </Col>
              ))
            }
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default Khuyenmai