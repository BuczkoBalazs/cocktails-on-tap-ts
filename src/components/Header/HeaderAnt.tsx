import { NavBar, MenuWrapper, MenuItem } from './HeaderAntStyle';
import { Login } from './Login';

import { logo, loggedIn, notLoggedIn } from './HeaderAntMenuProps';
import { useContext } from 'react';
import { LoginContext } from '../contexts/LoginContext';

export const HeaderAnt = () => {

  const loginContext = useContext(LoginContext)

  return (
    <NavBar offsetTop={0}>
      <MenuWrapper>
        <MenuItem items={logo} />
        <MenuItem items={loginContext.user.name !== "Guest" ? loggedIn : notLoggedIn} />
        <Login />
      </MenuWrapper>
    </NavBar>
  )
};