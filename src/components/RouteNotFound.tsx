import { Button, Result } from 'antd';
import React from 'react';

export const RouteNotFound: React.FC = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="link" href='http://localhost:3000/'>Back Home</Button>}
  />
);