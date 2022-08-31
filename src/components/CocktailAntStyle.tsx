import { Card, Divider ,Space } from 'antd';
import 'antd/dist/antd.css';
import styled from '@emotion/styled';

export const CocktailCard = styled(Card)( () => ({
    width: '650px',
    height: '400px',
    margin: 'auto',
    border: '1px solid darkkhaki',
    borderRadius: '15px',
    background: 'rgba(255,255,255, 0.3)',
    boxShadow: 'rgb(0 0 0 / 90%) 0px 2px 8px',
    backdropFilter: 'blur(10px)',
    'div': {
        color: 'white'
    }
}));

export const CocktailInfoSpace = styled(Space)( () => ({
    'span, div': {
        color: 'white'
    },
    span: {
        fontSize: '14px'
    },
    div: {
        margin: '0',
        fontSize: '11px'
    }
}));