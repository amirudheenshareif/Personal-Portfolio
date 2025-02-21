import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <div className='footer'>
        <p>Made with love &hearts; Amirudheen Shareif </p>
        <p id='copyright'>&copy; {new Date().getFullYear()} Amirudheen Shareif. All rights reserved.</p>
    </div>
  )
}
