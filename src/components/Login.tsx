import React, { useContext, useState } from 'react';
import { LoginContext } from './contexts/LoginContext';
import { Button, Input, Space } from 'antd';
import 'antd/dist/antd.css';

export const Login = () => {

    const loginContext = useContext(LoginContext);

    const handleLogin = () => loginContext.setUser({name: input});

    const handleLogout = () => loginContext.setUser({name: 'Guest'});

    const [input, setInput] = useState('');

    const inputChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value);

    return (

    <Space>
        <Input type="text" value={input} onChange={inputChangeHandle} />
        <Button onClick={handleLogin}>Login</Button>
        <Button onClick={handleLogout}>Logout</Button>
        <p style={{ color: 'darkkhaki' }}>Hello, {loginContext?.user?.name}!</p>
    </Space>
    )
}
