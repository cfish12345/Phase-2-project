import React, { useState } from 'react'
import MenuCard from './MenuCard'

function MenuList({ items, cart }) {

  

  return (
    <ul className="items">
        {items.map(item => <MenuCard cart={cart} item={item} key={item.id}/>)}
    </ul>
  );
}

export default MenuList;