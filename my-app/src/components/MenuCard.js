import React, { useState } from 'react'
import Thanks from './Thanks'

function MenuCard({ item, cart }) {

  const {image, name, price, quantity} = item

  const [isOrdered, setIsOrdered] = useState(true)


 
  const handleClick = (e) => {
    e.preventDefault()
    setIsOrdered(isOrdered => !isOrdered)
    item.quantity = item.quantity + 1
    cart.push(item)
  }

  return (
    <li className="item">
      <img src={image} alt="item pic" />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      {quantity > 0 &&
        <p>
          Quantity: {quantity}
        </p>
      }
      <button className="primary" onClick={e =>handleClick(e)}>Add to Order</button>
    </li>
  );
}

export default MenuCard;