import React from 'react'
import MenuCard from './MenuCard'

function MenuList({ items }) {
  return (
    <ul className="items">
        {items.map(item => <MenuCard item={item} key={item.id}/>)}
    </ul>
  );
}

export default MenuList;