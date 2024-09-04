import React from 'react'
import { Container, Row, Col  } from "reactstrap";
import cate1 from '../../../assets/images/cate1.jpg';
import cate2 from '../../../assets/images/cate2.jpg';
import cate3 from '../../../assets/images/cart3.jpg';
import cate4 from '../../../assets/images/cate4.jpg';

const categoryData = [
{
    display:'BestSeller',
    imgUrl: cate1
},
{
    display:'Đặt Hàng',
    imgUrl: cate1
},
{
    display:'Khuyến Mãi',
    imgUrl: cate1
},
{
    display:'Best Seller',
    imgUrl: cate1
},


]


const Category = () => {
  return (
    <div>Category</div>
  )
}

export default Category