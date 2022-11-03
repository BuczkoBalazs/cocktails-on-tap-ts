import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../contexts/LoginContext';
import { Button, Input, message, Space } from 'antd';
import 'antd/dist/antd.css';
import { useUsersQuery } from '../../generate/graphql';

export const Login = () => {

    const loginContext = useContext(LoginContext);

    const { data } = useUsersQuery();

    const handleLogin = () => {
        const userData = data?.users?.filter(user => user.email === input)
        userData!.length >= 1 ?
        loginContext.setUser({id: userData![0].id, name: userData![0].name}) :
        message.error("This e-mail address is not registered!")
        setInput('');
    };

    const handleLogout = () => loginContext.setUser({id: 0, name: 'Guest'});

    const navigate = useNavigate();

    const [input, setInput] = useState('');

    const inputChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value);

    return (
    <Space>
        {loginContext.user.name === 'Guest' && <Input type="text"    value={input} onChange={inputChangeHandle} />}
        {loginContext.user.name === 'Guest' && <Button onClick={handleLogin}>Login</Button>}
        {loginContext.user.name !== 'Guest' && <Button onClick={handleLogout}>Logout</Button>}
        {loginContext.user.name === 'Guest' && <Button onClick={() => navigate('/reg')}>Register</Button>}
        <p style={{ color: 'darkkhaki' }}>Hello, {loginContext?.user?.name}!</p>
    </Space>
    )
};