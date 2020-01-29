import React from 'react';
import {Menu} from 'semantic-ui-react'

import NavLink from './NavLink'


const Header = () => {
  return (
    <Menu>
      <Menu.Item 
        header 
        name="Debt Check"
      />
      <Menu.Menu 
        position="right"
      >
        <Menu.Item>
          <NavLink to="/">Car</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/credit">Credit Card</NavLink>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

export default Header