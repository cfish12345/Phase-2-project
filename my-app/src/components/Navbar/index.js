import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './Navbarelements';
import KrustyLogo from '../KrustyLogo.png'

const Navbar = () => {
  return (
    <>
        <Nav>
            <NavLink to="/">
               {/* <h1>🍔</h1>  */}
               <img src={KrustyLogo} alt='Krusty Krab Logo' className='logo'></img>
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
                <NavBtnLink to="/Thanks" className={'submitbutton'}>Submit Order</NavBtnLink>
            </NavBtn>
        </Nav>
    </>
  )
}

export default Navbar