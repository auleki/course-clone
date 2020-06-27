import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
  const active = { color: "orange" };
  return(
    
    <nav>
        <NavLink activeStyle={active} exact to="/">Home</NavLink>  
        | <NavLink activeStyle={active} to="/about">About</NavLink> | 
          <NavLink activeStyle={active} to="/courses">Courses</NavLink> 
    </nav>
)
}

export default Header;