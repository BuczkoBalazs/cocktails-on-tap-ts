import React, { useState } from 'react';
import { GalleryHeader } from './GalleryHeader';
import { BackTop } from 'antd';
import 'antd/dist/antd.css';
import { GallerySpace } from './GalleryAntStyle';
import { GalleryCocktailWrapper } from './GalleryCocktailWrapper';
import { Cocktail, useCocktailsQuery } from '../../generate/graphql';

enum SortCocktails {
    ASC = 'Sort ascending',
    DESC = 'Sort descending'
};

export const GalleryAnt = () => {
    
    const { data, loading, error } = useCocktailsQuery();
    
    const [searchInput, setSearchInput] = useState<string>('');
    const [sortButton, setSortButton] = useState<SortCocktails>(SortCocktails.ASC);

    const inputChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => setSearchInput(e.target.value);

    const sortButtonChangeHandle = () => {
        data?.cocktails?.sort((a: Cocktail, b: Cocktail) => sortButton === SortCocktails.ASC ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
        setSortButton(sortButton === SortCocktails.ASC ? SortCocktails.DESC : SortCocktails.ASC);
    };

    return (
    <GallerySpace direction='vertical'>
        <GalleryHeader searchInput={searchInput} inputChangeHandle={inputChangeHandle} sortButton={sortButton} sortButtonChangeHandle={sortButtonChangeHandle} />
        <GalleryCocktailWrapper  cocktails={data?.cocktails} searchInput={searchInput} loading={loading} error={error} />
        <BackTop />
    </GallerySpace>
    )
};