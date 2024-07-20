import React from 'react'
import logo from '../assets/FoodieLogo.png'
import './Home.css'
import iphone from '../assets/iphone13-Layout.png'

const home = () => {
  return (
    <div className='home'>



      <div className='navbar'>
          <img src={logo}/> 
          <button>Join the Waitlist</button>
      </div>

      
        
      
      <div className='hero-section'>
        <div className='overlay'></div>
        <div className='hero-right'>
          <img src={logo} className='hero-logo'/>
          <h1>Welcome to Foodie</h1>
          <p> Lorem ipsum dolor Nam sed fuga minus, repellendus, quos omnis sit fugiat expedita cumque assumenda iure. Deleniti repellat recusandae dicta maiores aliquam eum beatae accusantium! Nostrum recusandae, quasi ipsum natus iste ullam temporibus quibusdam

          </p>
          <button>Join the Waitlist</button>
        </div>
      </div>

      <div className='form'>
        <center>
        <h1>Join the Waitlist</h1>
        <input placeholder='Name'/>
        <input placeholder='Phone Number'/>
        <input placeholder='City'/>
        <div className='form-btn'>
        
        <button >Join the Waitlist</button>
        
        </div>
        </center>
        
      </div>
      <div className='footer'>
        <p>@foodie2024</p>

      </div>
      
    </div>  
  )
}

export default home
