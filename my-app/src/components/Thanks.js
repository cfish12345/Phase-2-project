import React, { useState } from 'react'
import ThanksCard from './ThanksCard'

const Thanks = ({ cart }) => {

  const totalPrice = cart.reduce((total, item) => {
    return total + item.price;
  }, 0);

  console.log("Total: ", totalPrice)

  return (
    <div>
      <div className='cardList'>
        {cart.map(receipt => <ThanksCard receipt={receipt}/>)}
      </div>
      <div className='thanks'>
       <h4 >Total: ${totalPrice}</h4>
       <p >Thanks for your order!</p>
      </div>
      <img className="krabs" src='https://c.tenor.com/cmsHl0C-Bi8AAAAC/mr-krabs-triggered.gif'/>
      <p className="krabstext">Spongebob, GET BACK TO WORK!</p>
    </div>
  )
}

export default Thanks