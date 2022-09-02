import React, { useState } from 'react';
import { CocktailAnt } from './CocktailAnt';
import { BackTop, Input, Space, Typography } from 'antd';
import 'antd/dist/antd.css';
import { GallerySpace, SortButton } from './GalleryAntStyle';
import { CocktailWrapperSpace } from './FavouritesAntStyle';
import { useFetch } from './hooks/useFetch';
import { CocktailDetails, SortCocktails } from './types/Types';

const { Title } = Typography;

export const GalleryAnt = () => {
    
    const [sort, setSort] = useState<CocktailDetails[] | []>([]);
    const [searchInput, setSearchInput] = useState<string>('');
    const [sortButton, setSortButton] = useState<SortCocktails>(SortCocktails.ASC)
    
    const { data: cocktails } = useFetch('http://localhost:3001/cocktails');

    const inputChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => setSearchInput(e.target.value);

    const sortButtonChangeHandle = () => {
        setSort([...cocktails.sort( (a: CocktailDetails,b: CocktailDetails) => sortButton === SortCocktails.ASC ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))]);
        setSortButton(sortButton === SortCocktails.ASC ? SortCocktails.DESC : SortCocktails.ASC);
    };


    /* react comp-ba kiszervezni a div-et, komponens-t*/
    return (
    <GallerySpace direction='vertical'>
        <Space direction='vertical'>
            <Title>Welcome to our gallery! Feel free to browse.</Title>
            <Input placeholder='Search cocktails by name' allowClear value={searchInput} onChange={inputChangeHandle} />
            <SortButton onClick={sortButtonChangeHandle} block >{sortButton}</SortButton>
        </Space>
        <CocktailWrapperSpace wrap={true}>
            {cocktails && cocktails.map(({ id, name, howto, ingredients, image, favourite }: CocktailDetails) => name.toLowerCase().includes(searchInput.toLowerCase()) && <CocktailAnt key={id} id={id} name={name} howto={howto} ingredients={ingredients} image={image} favourite={favourite} />
            )}
        </CocktailWrapperSpace>
        <BackTop />
    </GallerySpace>
    )
}
