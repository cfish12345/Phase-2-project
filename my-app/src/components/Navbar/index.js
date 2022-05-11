import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './Navbarelements';

const Navbar = () => {
  return (
    <>
        <Nav>
            <NavLink to="/">
               <h1>🍔</h1> 
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/Menu" >
                    OrderHere
                </NavLink>
                <NavLink to="/Application" >
                    Application
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/Thanks">Submit Order</NavBtnLink>
            </NavBtn>
        </Nav>
    </>
  )
}

export default Navbar