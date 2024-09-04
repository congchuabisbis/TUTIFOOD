

import React from 'react'
import { ListGroupItem } from 'reactstrap'
import '../../../styles/cart-item.css'
import { useDispatch } from 'react-redux'
import { cartAction } from '../../../store/shopping-cart/cartSlice'

const CartItem = (props) => {
    const { _id, name, price, img, description, quantity, totalPrice } = props.item



    const dispatch = useDispatch()
    const incrementItem = () => {
        dispatch(cartAction.addItem({
            _id,
            name,
            img,
            description,
            price
        }));
    }

    const decreaseItem = () => {
        dispatch(cartAction.decreaseItem(_id));
    };

    const deleteItem = () => {
        dispatch(cartAction.deleteItem(_id));
    };
    return (
        <ListGroupItem className='border-0 cart__item'>
            < div className="cart__item-info d-flex gap-2">
                <img src={img} alt='product-img' />

                <div className='cart__product-info w-100 d-flex align-items-center gap 04 justify-content-between'>
                    <div>
                        <h6 className='cart_product-title'>{name}</h6>
                        <p className='d-flex align-items-center gap-5 cart__product-price'>
                            {quantity}x <span>{parseFloat(totalPrice)}.000</span>
                        </p>
                        <div className='d-flex align-items-center justify-content-between increase__decrease-btn'>
                            <span className='increase__btn' onClick={incrementItem}>
                                <i class='ri-add-line'></i>
                            </span>
                            <span className='quantity'>{quantity}</span>
                            <span className='decrease__btn' onClick={decreaseItem}>
                                <i class='ri-subtract-line'></i>
                            </span>
                        </div>
                    </div>
                    <span className='delete__btn' onClick={deleteItem}>
                        <i class='ri-close-line'></i>
                    </span>
                </div>
            </div>

        </ListGroupItem>
    );

};

export default CartItem