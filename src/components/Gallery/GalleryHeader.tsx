import React, { useContext } from 'react';
import { Input, Space, Typography } from 'antd';
import 'antd/dist/antd.css';
import { SortButton } from './GalleryAntStyle';
import { LoginContext } from '../contexts/LoginContext';

const { Title } = Typography;

type GalleryHeaderProps = {
    searchInput: string,
    inputChangeHandle: (e: React.ChangeEvent<HTMLInputElement>) => void,
    sortButtonChangeHandle: () => void,
    sortButton: string
};

export const GalleryHeader = React.memo(({ searchInput, inputChangeHandle, sortButtonChangeHandle, sortButton }: GalleryHeaderProps) => {

    console.log("GalleryHeader")

    const loginContext = useContext(LoginContext);

    return (
    <Space direction='vertical'>
        <Title>Welcome to our gallery, {loginContext.user.name}! Feel free to browse.</Title>
        <Input placeholder='Search cocktails by name' allowClear value={searchInput} onChange={inputChangeHandle} />
        <SortButton onClick={sortButtonChangeHandle} block >{sortButton}</SortButton>
    </Space>
    )
})
