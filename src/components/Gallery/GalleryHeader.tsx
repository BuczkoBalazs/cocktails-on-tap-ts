import React, { useContext, useState } from 'react';
import { Input, Space, Typography } from 'antd';
import 'antd/dist/antd.css';
import { SortButton } from './GalleryAntStyle';
import { LoginContext } from '../contexts/LoginContext';
import { Cocktail, useCocktailsQuery } from '../../generate/graphql';

const { Title } = Typography;

type GalleryHeaderProps = {
    searchInput: string,
    inputChangeHandle: (e: React.ChangeEvent<HTMLInputElement>) => void,
};

enum SortCocktails {
    ASC = 'Sort ascending',
    DESC = 'Sort descending'
};

export const GalleryHeader = ({ searchInput, inputChangeHandle }: GalleryHeaderProps) => {

    const loginContext = useContext(LoginContext);
    const [sortButton, setSortButton] = useState<SortCocktails>(SortCocktails.ASC);
    const { data, updateQuery } = useCocktailsQuery();

    const sortButtonChangeHandle = () => {

        const sortedCocktails = [...data?.cocktails!].sort((a: Cocktail, b: Cocktail) => sortButton === SortCocktails.ASC ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));

        updateQuery(() => ({
            cocktails: [...sortedCocktails]
        }));

        setSortButton(sortButton === SortCocktails.ASC ? SortCocktails.DESC : SortCocktails.ASC);
    };


    return (
    <Space direction='vertical'>
        <Title>Welcome to our gallery, {loginContext.user.name}! Feel free to browse.</Title>
        <Input placeholder='Search cocktails by name' allowClear value={searchInput} onChange={inputChangeHandle} />
        <SortButton onClick={sortButtonChangeHandle} block >{sortButton}</SortButton>
    </Space>
    )
};