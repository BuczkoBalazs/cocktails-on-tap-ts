import { Affix, Menu, Space } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';

export const HomeIcon = styled(HomeOutlined)( () => ({
    color: 'darkkhaki',
    ':hover': {
        color: 'white'
    }
    })
);

export const NavBar = styled(Affix, { shouldForwardProp: prop => isPropValid(prop) && prop !== 'position' && prop !== 'width' && prop !== 'height' && prop !== 'zIndex'})( (props) => ({
    position: 'fixed',
    width: '100%',
    height: '60px',
    zIndex: 2,
}));

export const MenuWrapper = styled(Space, { shouldForwardProp: prop => isPropValid(prop) && prop !== 'width' && prop !== 'height' && prop !== 'justifyContent' })( (props) => ({
    width: '100%',
    height: '60px',
    justifyContent: 'space-between',
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
            color: 'white',
        }
    },
}));
