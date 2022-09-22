import React, { useEffect, useState } from 'react';
import { GalleryHeader } from './GalleryHeader';
import { BackTop } from 'antd';
import 'antd/dist/antd.css';
import { GallerySpace } from './GalleryAntStyle';
import { useFetch } from '../hooks/useFetch';
import { GalleryCocktailWrapper } from './GalleryCocktailWrapper';

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

    const { data, loading, error } = useFetch<CocktailDetails[]>('http://localhost:3001/cocktails');
    
    const [searchInput, setSearchInput] = useState<string>('');
    const [sortButton, setSortButton] = useState<SortCocktails>(SortCocktails.ASC);
    const [cocktails, setCocktails] =useState<CocktailDetails[] | []>([])

    const inputChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => setSearchInput(e.target.value);

    const sortButtonChangeHandle = () => {
        cocktails.sort( (a: CocktailDetails,b: CocktailDetails) => sortButton === SortCocktails.ASC ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
        setSortButton(sortButton === SortCocktails.ASC ? SortCocktails.DESC : SortCocktails.ASC);
    };

    const deleteCocktail = async (id: number) => {
        await fetch('http://localhost:3001/cocktails/' + id, {
            method: 'DELETE'
        });
        setCocktails(cocktails.filter( cocktail => cocktail.id !== id))
    };

    const favouriteToggle = async (id: number, name: string, howto: string, ingredients: string, image: string, favourite: boolean) => {
        await fetch('http://localhost:3001/cocktails/' + id, {
            method: 'PUT',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                id: id,
                name: name,
                howto: howto,
                ingredients: ingredients,
                image: image,
                favourite: favourite
            }),
        });
    };

    useEffect( () => {
        setCocktails(data)
    }, [data]);

    return (
    <GallerySpace direction='vertical'>
        <GalleryHeader searchInput={searchInput} inputChangeHandle={inputChangeHandle} sortButton={sortButton} sortButtonChangeHandle={sortButtonChangeHandle} />
        <GalleryCocktailWrapper  cocktails={cocktails} searchInput={searchInput} deleteCocktail={deleteCocktail} favouriteToggle={favouriteToggle} loading={loading} error={error} />
        <BackTop />
    </GallerySpace>
    )
}
