import React, { useState, useContext } from 'react';
import { CocktailAnt } from '../CocktailCard/CocktailAnt';
import { BackTop, Button, Input, Space, Spin, Result, Typography } from 'antd';
import 'antd/dist/antd.css';
import { GallerySpace, SortButton } from './GalleryAntStyle';
import { CocktailWrapperSpace } from '../Favourites/FavouritesAntStyle';
import { useFetch } from '../hooks/useFetch';
import { LoginContext } from '../contexts/LoginContext';

const { Title } = Typography;

type CocktailDetails = {
    id: number,
    name: string,
    howto: string,
    ingredients: string,
    image: string,
    favourite: boolean
};

enum SortCocktails {
    ASC = 'Sort ascending',
    DESC = 'Sort descending'
};

export const GalleryAnt = () => {

    const loginContext = useContext(LoginContext);

    const { data: cocktails, loading, error } = useFetch<CocktailDetails[]>('http://localhost:3001/cocktails');
    
    const [searchInput, setSearchInput] = useState<string>('');
    const [sortButton, setSortButton] = useState<SortCocktails>(SortCocktails.ASC);

    const inputChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => setSearchInput(e.target.value);

    const sortButtonChangeHandle = () => {
        cocktails.sort( (a: CocktailDetails,b: CocktailDetails) => sortButton === SortCocktails.ASC ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
        setSortButton(sortButton === SortCocktails.ASC ? SortCocktails.DESC : SortCocktails.ASC);
    };

    const deleteCocktail = async (id: number) => {
        await fetch('http://localhost:3001/cocktails/' + id, {
            method: 'DELETE'
        })      
    };

    /* react comp-ba kiszervezni a div-et, komponens-t*/
    return (
    <GallerySpace direction='vertical'>
        <Space direction='vertical'>
            <Title>Welcome to our gallery, {loginContext.user.name}! Feel free to browse.</Title>
            <Input placeholder='Search cocktails by name' allowClear value={searchInput} onChange={inputChangeHandle} />
            <SortButton onClick={sortButtonChangeHandle} block >{sortButton}</SortButton>
        </Space>
        <CocktailWrapperSpace wrap={true}>
            {cocktails.length > 0 && cocktails.map((cocktail: CocktailDetails) => cocktail.name.toLowerCase().includes(searchInput.toLowerCase()) && <CocktailAnt key={cocktail.id} cocktail={cocktail} deleteCocktail={deleteCocktail} />
            )}
            {loading && <Spin />}
            {error && <Result
            status="500"
            title="500"
            subTitle={error}
            extra={<Button type="link" href='http://localhost:3000/'>Back Home</Button>}
            />}
        </CocktailWrapperSpace>
        <BackTop />
    </GallerySpace>
    )
}
