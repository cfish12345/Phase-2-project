import React, { useState } from 'react'

const ThanksCard = ({ receipt }) => {

  const handleClick = () => {
    receipt.filter(item => item.id !== receipt.id)


  const handleClick = () => {
    
  }
    
  return (
    <div className="item">
      <p className="receiptname">{receipt.name}</p>
      <p className="receiptprice">Price: ${receipt.price} <button onClick={handleClick}>Remove</button></p>
    </div>
  )
}
}

export default ThanksCard