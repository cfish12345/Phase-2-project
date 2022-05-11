import React, { useState } from 'react'

function MenuCard({ item }) {

  const {image, name, price} = item

  const [isOrdered, setIsOrdered] = useState(true)

  const handleClick = () => {
    setIsOrdered(isOrdered => !isOrdered)
  }

  return (
    <li className="item">
      <img src={image} alt="item pic" />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isOrdered ? (
        <button className="primary" onClick={handleClick}>Add to Order</button>
      ) : (
        <button onClick={handleClick}>Added to Order</button>
      )}
    </li>
  );
}

export default MenuCard;