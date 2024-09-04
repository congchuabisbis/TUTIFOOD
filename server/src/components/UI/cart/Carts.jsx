

import React from 'react'
import { ListGroup } from 'reactstrap'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { cartUiActions } from '../../../store/shopping-cart/cartUiSlice'
import '../../../styles/shoppingcart.css'
const Carts = () => {
    const dispatch = useDispatch()
    const cartProducts = useSelector(state => state.cart.cartItems)
    const toggleCart = () => {
        dispatch(cartUiActions.toggleVisible())
    }


    // Tính tổng số tiền
    let totalAmount = 0;
    cartProducts.forEach((item) => {
        totalAmount += parseFloat(item.totalPrice);
    });
    return (
        <div className='cart__container'>
            <ListGroup className='cart'>

                <div className='cart_close'>
                    <span onClick={toggleCart}>
                        <i class='ri-close-fill'></i>
                    </span>
                </div>

                <div className='cart__item-list'>
                    {
                        cartProducts.length === 0 ? (
                            <h6 className='text-center mt-5'>Không có sản phẩm nào</h6>) : (cartProducts.map((item, index) => (
                                <CartItem item={item} key={index} />
                            ))

                        )}
                </div>
                <div className='cart__bottom d-flex align-items-center justify-content-between'>
                    <h6>Thành tiền: <span>{parseFloat(totalAmount).toFixed(3)}</span></h6>
                    <button><Link style={{ "text-decoration": "none" }} to='/checkout' onClick={toggleCart}>Checkout</Link></button>

                </div>

            </ListGroup>

        </div>


    )
}

export default Carts