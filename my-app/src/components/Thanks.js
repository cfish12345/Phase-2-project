import React, { useState } from 'react'
import ThanksCard from './ThanksCard'

const Thanks = ({ cart }) => {

  // const [remove, setRemove] = useState(cart)

  
  // const newCart = remove.filter((item) => item.id !== id)
  // setRemove(newCart)
  

  const totalPrice = cart.reduce((total, item) => {
    return total + item.price;
  }, 0);

  console.log("Total: ", totalPrice)

  return (
    <div>
      {cart.map(receipt => <ThanksCard receipt={receipt}/>)}
      <h4 className="total">Total: ${totalPrice}</h4>
      <p className="thanks">Thanks for your order! Spongebob, get to work!</p>
    </div>
  )
}

export default Thanks