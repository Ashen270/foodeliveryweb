import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'

const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext);

     return (
    <form className='place-order' action="">
      <div className="place-order-left">
        <p className="title">Delivery information</p>

        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>

        <input type="email" placeholder='Email Address' />
        <input type="text" placeholder='Street' />

        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='Province' />
        </div>

        <div className="multi-fields">
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text"  placeholder='Phone Number'/>
      </div>
      <div className="place-order-right">
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
            <p>Rs {400}.00</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <b>Total</b>
              <b>Rs {getTotalCartAmount()+400}.00</b>
            </div>
          </div>
          <button>Proceed To Payment</button>
        </div>

      </div>
    </form>
  )
}

export default PlaceOrder