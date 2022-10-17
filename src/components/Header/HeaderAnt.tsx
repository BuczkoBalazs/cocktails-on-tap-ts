import { NavBar, MenuWrapper, MenuItem } from './HeaderAntStyle';
import { Login } from './Login';

import { logo, items } from './HeaderAntMenuProps';

export const HeaderAnt = () => {
  return (
    <NavBar offsetTop={0}>
      <MenuWrapper>
        <MenuItem items={logo} />
        <Login />
        <MenuItem items={items} />
      </MenuWrapper>
    </NavBar>
  )
};