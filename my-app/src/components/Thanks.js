import React, { useState } from 'react'
import ThanksCard from './ThanksCard'

const Thanks = ({ cart }) => {

  const totalPrice = cart.reduce((total, item) => {
    return total + item.price;
  }, 0);

  console.log("Total: ", totalPrice)

  return (
    <div>
      {cart.map(receipt => <ThanksCard receipt={receipt}/>)}
      <h4 className="total">Total: ${totalPrice}</h4>
    </div>
  )
}

export default Thanks