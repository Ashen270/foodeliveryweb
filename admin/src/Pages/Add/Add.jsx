import React from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
const Add = () => {

    const [image, setImage] = useState(false)

  return (
    <div className='add'>

      <form className='flex-col'>
        <div className="add-image-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor='image'>
            <img src={assets.upload_area} alt="" />
          </label>
          <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required />
        </div>
        <div className="add-product-name flex-col">
          <p>Product name</p>
          <input type="text" name='name' placeholder='Type Here' />
        </div>
        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea name="description" rows="6" placeholder='Write Content Here' required></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select name="category" >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Desert">Desert</option>
              <option value="Sanwich">Sanwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product Price</p>
            <input type="Number" name='price' placeholder='Rs.200' />
          </div>
        </div>
        <button type='submit' className='add-button'>ADD</button>
      </form>
    </div>
  )
}

export default Add
