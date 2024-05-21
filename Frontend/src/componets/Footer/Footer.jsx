import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>kdasjk ljdsal asdlasjdkl lkasjd akls lkjadlkasjlakjdlkasjdalskdjaskljal  kjadklasj lkadjkla </p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
      
      <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Purchasing Policy</li>
          </ul>  
          
      </div>
      <div className="footer-content-right">
      <h2>GET in touch</h2>
            <ul>
                <li>+94786401568</li>
                <li>manager@karapincha.com</li>
            </ul>
      </div>
    </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 Karapincha.com - All Right Reserved.
      </p>
    </div>

  )
}

export default Footer
