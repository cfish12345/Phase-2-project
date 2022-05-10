import React from 'react'

function MenuCard({ item }) {

  const {image, name, price} = item

  return (
    <li>
      <img src={image} alt="item pic" />
      <h4>{name}</h4>
      <p>Price: {price}</p>
    </li>
  );
}

export default MenuCard;