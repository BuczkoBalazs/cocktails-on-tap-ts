import { Affix, Menu, Space } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import styled from '@emotion/styled';

export const HomeIcon = styled(HomeOutlined)( () => ({
    color: 'darkkhaki',
    ':hover': {
        color: 'white'
    }
    })
);

export const NavBar = styled(Affix)( () => ({
    position: 'fixed',
    width: '100%',
    height: '60px',
    margin: '0 auto',
    zIndex:2,
}));

export const MenuWrapper = styled(Space)( () => ({
    width: '100%',
    height: '60px',
    margin: '0 auto',
    justifyContent: 'space-between',
    alignItems: 'center'
}));

export const MenuItem = styled(Menu)( () => ({
    display: 'flex',
    margin: '0 20px',
    backgroundColor: 'transparent',
    border: 'none',
    li: {
        margin: '0 5px',
        color: 'white',
        border: '1px solid darkkhaki',
        borderRadius: '10px',
        backgroundColor: 'transparent',
        ':hover': {
            border: '1px solid white',
        },
    },
    a: {
        color: 'darkkhaki',
        ':hover': {
            color: 'white'
        }
    },
}));