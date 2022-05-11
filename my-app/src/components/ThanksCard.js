import React from 'react'

const ThanksCard = ({ receipt }) => {
  return (
    <li className="item">
      <img src={receipt.image} alt="item pic" />
      <h4>{receipt.name}</h4>
      <p>Price: ${receipt.price}</p>
      {receipt.quantity > 0 &&
        <p>
          quantity: {receipt.quantity}
        </p>
      }
    </li>
  )
}

export default ThanksCard