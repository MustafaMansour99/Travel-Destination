import React from 'react'
import '../footer/Footer.css'

function Footer() {
  return (
    
    <div className='footer'>

      <p className='copyright'> &copy; All right reserved </p>
      <h1>Mustafa Mansour</h1>
      <ul className='social-media'>
      <a href="https://www.facebook.com/"  target="_blank"><i class="fab fa-facebook">Facebook</i></a><br></br>
      <a href="https://www.instagram.com/?hl=en" target="_blank"><i class="fab fa-instagram">Instagram</i></a><br></br>
      <a href="https://twitter.com/?lang=en" target="_blank"><i class="fab fa-twitter">twitter</i></a>


      </ul>

    </div>
  )
}

export default Footer;