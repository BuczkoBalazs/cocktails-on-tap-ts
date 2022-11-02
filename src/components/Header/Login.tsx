import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../contexts/LoginContext';
import { Button, Input, Space } from 'antd';
import 'antd/dist/antd.css';

export const Login = () => {

    const loginContext = useContext(LoginContext);

    const handleLogin = () => {
        loginContext.setUser({name: input});
        setInput('');
    };

    const handleLogout = () => loginContext.setUser({name: 'Guest'});

    const navigate = useNavigate();

    const [input, setInput] = useState('');

    const inputChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value);

    return (
    <Space>
        {loginContext.user.name === 'Guest' && <Input type="text" value={input} onChange={inputChangeHandle} />}
        {loginContext.user.name === 'Guest' && <Button onClick={handleLogin}>Login</Button>}
        {loginContext.user.name !== 'Guest' && <Button onClick={handleLogout}>Logout</Button>}
        {loginContext.user.name === 'Guest' && <Button onClick={() => navigate('/reg')}>Register</Button>}
        <p style={{ color: 'darkkhaki' }}>Hello, {loginContext?.user?.name}!</p>
    </Space>
    )
};