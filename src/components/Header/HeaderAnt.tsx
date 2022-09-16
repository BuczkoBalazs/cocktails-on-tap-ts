import 'antd/dist/antd.css';
import { NavBar, MenuWrapper, MenuItem } from './HeaderAntStyle';
import { LoginContextProvider } from '../contexts/LoginContext';
import { Login } from './Login';

import { logo, items } from './HeaderAntMenuProps';

export const HeaderAnt = () => {
  return (
    <LoginContextProvider>
      <NavBar offsetTop={0}>
          <MenuWrapper>
              <MenuItem items={logo} />
              <Login />
              <MenuItem items={items} />
          </MenuWrapper>
      </NavBar>
    </LoginContextProvider>
  )
}
