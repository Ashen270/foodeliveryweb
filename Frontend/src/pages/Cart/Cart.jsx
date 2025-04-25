import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const { cartItems, food_list, removeFromCart, getTotalCartAmount,baseURL } = useContext(StoreContext);
  const navigate = useNavigate();
  return (

    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className='cart-items-title cart-items-item'>
                  <img src={baseURL+"/images/"+item.image} alt="" />
                  <p>{item.name}</p>
                  <p>Rs {item.price}.00</p>
                  <p>{cartItems[item._id]}</p>
                  <p>Rs {item.price * cartItems[item._id]}.00</p>
                  <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-detail">
              <p>Subtotal</p>
              <p>Rs {getTotalCartAmount()}.00</p>
            </div>
            <hr />
            <div className="cart-total-detail">
            <p>Delivery Fee</p>
            <p>Rs {getTotalCartAmount()===0?0:400}.00</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <b>Total</b>
              <b>Rs {getTotalCartAmount()===0?0:getTotalCartAmount()+400}.00</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>Proceed To Checkout</button>
        </div>
        <div className="cart-promo-code">
          <div>
            <p>If you have promo code enter it here</p>
            <div className="cart-promo-code-input">
              <input type="text" placeholder='promo code'/>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart