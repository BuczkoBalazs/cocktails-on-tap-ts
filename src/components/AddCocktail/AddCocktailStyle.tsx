import { Form, Space } from 'antd';
import 'antd/dist/antd.css';
import styled from '@emotion/styled';

import background from '../image/landing4.jpg';

export const AddSpace = styled(Space)( () => ({
  width: '100%',
  height: '100vh',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}));

export const AddForm = styled(Form)( () => ({
  width: '600px',
  height: '60vh',
  marginTop: '100px',
  padding: '50px',
  background: 'rgba(255,255,255, 0.3)',
  boxShadow: 'rgb(0 0 0 / 90%) 0px 2px 8px',
  backdropFilter: 'blur(10px)'
}));