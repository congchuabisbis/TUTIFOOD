import React from 'react'

import { Link } from 'react-router-dom';

import '../../../styles/product-card.css';
import '../../../styles/product-card-sale.css';

import { useDispatch } from 'react-redux';
import { cartAction } from '../../../store/shopping-cart/cartSlice';

const ProductCardSale = (props) => {

    const { _id, name, img, price } = props.item;
    const priceSale = 300000;
    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(cartAction.addItem({
            _id,
            name,
            img,
            price,
        }))
    }



    return (
        <div className='product__item_sale'>
            <h3 class="sale-sticky">Sale</h3>
            <div className='product__img_sale'>
                <img src={img} alt='' className='w-50' />
            </div>

            <div className='product__content_sale'>

                <h5>
                    <Link to={`/foods/${_id}`}>{name}</Link>
                </h5>
                <div style={{ textAlign: "left", fontSize: "18px" }}><strike>{priceSale.toLocaleString()} VNĐ</strike></div>
                <div className='d-flex align-items-center justify-content-between'>
                    <span className='product__price_sale'>{price}</span>

                    <button className='addTOCart__btn_sale' onClick={addToCart}>
                        <i class="ri-shopping-cart-2-line"></i>
                    </button>
                </div>
            </div>
        </div>

    );
};

export default ProductCardSale