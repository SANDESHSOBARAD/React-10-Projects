/* eslint-disable no-unused-vars */
import React from 'react'
import Amazon from '../assets/amazon.png'
import Walmart from '../assets/walmart.png'
import Shoe from '../assets/hero-image.png'

const Hero = () => {
  return (
    <div className='hero-container'>
        <div className='hero-content'>
            <h1>YOUR FEET DESERVE <br/>THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
            YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
            </p>
            <div className="btn">
            <button className='btn-1'>Shop Now</button>
            <button className='btn-2'>Category</button>
            </div>
            <div className="shopping">
                <p>Also Available on</p>
                <div className='icons'>
                    <div className="icon1">
                        <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer">
                            <img src={Amazon} alt="amazon" />
                        </a>
                    </div>
                    <div className="icon2">
                        <a href="https://www.walmart.com" target="_blank" rel="noopener noreferrer">
                        <img src={Walmart} alt="walmart" />
                        </a>
                </div>
               
                    
                </div>

            </div>
        </div>
        <div className='shoe'>
            <img src={Shoe} alt="shoe" />
        </div>
    </div>
  )
}

export default Hero