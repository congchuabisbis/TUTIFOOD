import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import ProductCardSale from '../components/UI/product-card-sale/ProductCardSale';
import products from '../assets/fake-data/product';
import "../styles/khuyenmai.css";
import CommonSection from '../components/UI/common-section/CommonSection';

const Khuyenmai = () => {

  return (
    <div>
      <CommonSection title='KHUYẾN MÃI' />
      <Container>
        <div className='sale-page'>
          <Row>
            {
              products.map((item) => (
                <Col lg="3" md="4" key={item.id} className="mt-5">
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