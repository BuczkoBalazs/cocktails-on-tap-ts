import React from 'react';
import { Affix, Menu, Space } from 'antd';
import 'antd/dist/antd.css';
import styled from '@emotion/styled';

import { logo, items } from './HeaderAntMenuProps';

const NavBar = styled(Affix)( () => ({
    position: 'fixed',
    width: '100%',
    height: '60px',
    margin: '0 auto',
    color: 'white',
    zIndex:2,
}));

const MenuWrapper = styled(Space)( () => ({
    width: '100%',
    height: '60px',
    margin: '0 auto',
    justifyContent: 'space-between',
    alignItems: 'center'
}));

const MenuItem = styled(Menu)( () => ({
    margin: '0 20px',
    border: '1px solid red',
    borderRadius: '15px',
    backgroundColor: 'darkkhaki'
}));


export const HeaderAnt = () => {
  return (
    <NavBar offsetTop={0}>
        <MenuWrapper>
            <MenuItem mode="horizontal" items={logo} />
            <MenuItem mode="horizontal" items={items} />
        </MenuWrapper>
    </NavBar>
  )
}
