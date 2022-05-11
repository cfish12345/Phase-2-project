import React from 'react'
import Header from './Header'
import { Link } from "react-router-dom"; 

function Home() {
  return (
    <div className="home" style={{}}>
      <Header />
      <p className="subtitle"> Home of the Krabby Patty </p>
      <Link to="./Menu">
        <button> ORDER NOW </button>
      </Link>
    </div>
  )
}

export default Home;