// eslint-disable-next-line no-unused-vars
import React from 'react'
import "../App.css"
import Nike from '../assets/nike.png'
const NavigationBar = () => {
  return (
    <div className='container'>

        <div className="logo">
            <img src={Nike} alt="nike-logo" />
        </div>

        <ul>
            <li><a href='#'>MENU</a></li>
            <li><a href='#'>LOCATION</a></li>
            <li><a href='#'>ABOUT</a></li>
            <li><a href='#'>CONTACT</a></li>
        </ul>

        <div className='btn'>
            <button>LOGIN</button>
        </div>
    </div>
  )
}

export default NavigationBar