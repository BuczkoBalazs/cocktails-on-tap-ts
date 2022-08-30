import React, { useState, useEffect } from 'react';
import { CocktailDetails } from '../types/Types';
import { CocktailAnt } from './CocktailAnt';
import { Button, Input, Space, Typography } from 'antd';
import 'antd/dist/antd.css';

const { Title } = Typography;

export const GalleryAnt = () => {
    
    // típusokat beírni => enum
    const [cocktails, setCocktails] = useState<CocktailDetails[] | []>([]);
    const [searchInput, setSearchInput] = useState('');
    const [sortByName, setSortByName] = useState('asc');
    const [sortButton, setSortButton] = useState('Sort ascending')

    const getCocktails = async () => {

        const response = await fetch('http://localhost:3001/cocktails');
        const responseJSON = await response.json();
        setCocktails(responseJSON);
    }

    useEffect(() => {
        getCocktails();
    }, []);


    const inputChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => setSearchInput(e.target.value);

    const sortButtonChangeHandle = () => {
        setCocktails([...cocktails.sort( (a,b) => sortByName === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))]);
        setSortByName(sortByName === 'asc' ? 'desc' : 'asc');
        setSortButton(sortButton === 'Sort ascending' ? 'Sort descending' : 'Sort ascending');
    }

    /* react comp-ba kiszervezni a div-et, komponens-t*/
    return (
    <Space direction='vertical'>
        <Space direction='vertical'>
            <Title>Welcome to our gallery! Feel free to browse.</Title>
            <Input placeholder='Search cocktails by name' value={searchInput} onChange={inputChangeHandle} />
            <Button onClick={sortButtonChangeHandle} >{sortButton}</Button>
        </Space>
        <Space wrap={true}>
            {cocktails && cocktails.map(({ id, name, howto, ingredients, image, favourite }) => name.toLowerCase().includes(searchInput.toLowerCase()) && <CocktailAnt key={id} id={id} name={name} howto={howto} ingredients={ingredients} image={image} favourite={favourite} />
            )}
        </Space>
    </Space>
    )
}