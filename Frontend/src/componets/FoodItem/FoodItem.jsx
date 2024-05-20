import React from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'

const FoodItem = ({id,name,price,description,image}) => {
  return (
    <div className='food-item'>
        <div className="food-item-image-container">
            <img src={image} alt="" className="food-item-image" />
        </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
               <p>{name}</p>
              <img src={assets.rating_starts} alt="" />
              <p className='food-item-dec'>{description}</p>
              <p className="food-item-price">${price}</p>
        </div>
      </div>
    </div>
  )
}

export default FoodItem
