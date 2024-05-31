import React from 'react';
import { assets } from '../../assets/assets';  // Adjust the path as needed
import './Header.css';

const Header = () => {
  return (
    <div
      className="header"
      style={{
        backgroundImage: `url(${assets.header_img})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="header-contents">
        <h2>Order Your Favourite Food Here</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes crafted
          with the finest ingredients and culinary expertise. Our mission is to satisfy
          your cravings and elevate your dining experience, one delicious meal at a time.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
