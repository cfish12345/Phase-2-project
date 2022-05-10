import React, { useState, useEffect } from 'react';
import MenuList from './MenuList';

function Menu() {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch(`http://localhost:6001/menu-items`)
        .then(resp => resp.json())
        .then(data => setItems(data))
    }, []);


    return (
        <main>
            <MenuList items={items}/>
        </main>
    );
}

export default Menu;