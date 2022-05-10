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
                <NavLink to="/MenuList" >
                    OrderHere
                </NavLink>
                <NavLink to="/OnlineOrder" >
                    OnlineOrder
                </NavLink>
                <NavLink to="/Application" >
                    Application
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/signin">Submit Order</NavBtnLink>
            </NavBtn>
        </Nav>
    </>
  )
}

export default Navbar