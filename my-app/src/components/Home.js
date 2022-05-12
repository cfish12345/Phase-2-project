import React from 'react'
import Header from './Header'
import { Link } from "react-router-dom"; 

function Home() {
  return (
    <div className="home" style={{}}>
      <Header />
      <p className="subtitle"> Home of the Krabby Patty </p>
      <Link to="./Menu">
        <button className="orderbutton"> ORDER NOW </button>
      </Link>
      <br></br>
      <img src="https://ih1.redbubble.net/image.1106405219.4697/fposter,small,wall_texture,product,750x1000.u1.jpg" alt="store image" className='homeImg'></img>
    </div>
  )
}

export default Home;