import React, { useState } from 'react'

const ThanksCard = ({ receipt }) => {
    
  return (
    <div className="thanksCard">
      <p className="receiptname">{receipt.name}</p>
      <p className="receiptprice">Price: ${receipt.price} </p>
    </div>
  )
}


export default ThanksCard