import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import './Footer.css'

function Footer() {
  return (
    <footer>
      <a href='#' className='footer__logo'>allala</a>
      <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#">about</a></li>
      <li><a href="#">experience</a></li>
      <li><a href="#">portfolio</a></li>
      <li><a href="#">contact</a></li>
      <li><a href="#">testimonials</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://facebook.com"><FaFacebookF/></a>
      <a href="https://instagram.com"><FiInstagram/></a> 
      <a href="https://twitter.com"><FiInstagram/></a>
       </div>
       <div className="footer__copyright">
              <small>&copy; EGATOR Tutorials. All rights reserved.</ small >
              </div>

      
    </footer>
  )
}

export default Footer