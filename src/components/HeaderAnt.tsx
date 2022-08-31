import 'antd/dist/antd.css';

import { NavBar, MenuWrapper, MenuItem } from './HeaderAntStyle';


import { logo, items } from './HeaderAntMenuProps';

export const HeaderAnt = () => {
  return (
    <NavBar offsetTop={0}>
        <MenuWrapper>
            <MenuItem items={logo} />
            <MenuItem items={items} />
        </MenuWrapper>
    </NavBar>
  )
}
