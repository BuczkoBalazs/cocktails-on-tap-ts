import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { GalleryHeader } from './GalleryHeader';
import { BackTop } from 'antd';
import 'antd/dist/antd.css';
import { GallerySpace } from './GalleryAntStyle';
import { GalleryCocktailWrapper } from './GalleryCocktailWrapper';
import { CocktailDetails } from '../Type/CocktailDetailsType';

enum SortCocktails {
    ASC = 'Sort ascending',
    DESC = 'Sort descending'
};

type CocktailDetailsArray = {
    cocktails: CocktailDetails[]
};

export const GalleryAnt = () => {

    const GET_FAVORITES = gql`
        query getFavorites {
            cocktails {
                id
                name
                howTo
                ingredients
                image
                favorite
            }
        }
    `

    const { data, loading, error } = useQuery<CocktailDetailsArray | null>(GET_FAVORITES);

    console.log(data?.cocktails)
    
    const [searchInput, setSearchInput] = useState<string>('');
    const [sortButton, setSortButton] = useState<SortCocktails>(SortCocktails.ASC);
    // const [cocktails, setCocktails] = useState<CocktailDetails[] | []>([]);

    const inputChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => setSearchInput(e.target.value);

    const sortButtonChangeHandle = () => {
        [...data?.cocktails!].sort((a: CocktailDetails, b: CocktailDetails) => sortButton === SortCocktails.ASC ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
        setSortButton(sortButton === SortCocktails.ASC ? SortCocktails.DESC : SortCocktails.ASC);
    };

    const deleteCocktail = async (id: number) => {
        await fetch('http://localhost:3001/cocktails/' + id, {
            method: 'DELETE'
        });
        // setCocktails(cocktails.filter( cocktail => cocktail.id !== id));
    };

    const favoriteToggle = async (id: number, name: string, howTo: string, ingredients: string, image: string, favorite: boolean) => {
        await fetch('http://localhost:3001/cocktails/' + id, {
            method: 'PUT',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                id: id,
                name: name,
                howTo: howTo,
                ingredients: ingredients,
                image: image,
                favorite: favorite
            }),
        });
    };

    // useEffect( () => {
    //     setCocktails(data);
    // }, [data]);

    return (
    <GallerySpace direction='vertical'>
        <GalleryHeader searchInput={searchInput} inputChangeHandle={inputChangeHandle} sortButton={sortButton} sortButtonChangeHandle={sortButtonChangeHandle} />
        <GalleryCocktailWrapper  data={data} searchInput={searchInput} deleteCocktail={deleteCocktail} favoriteToggle={favoriteToggle} loading={loading} error={error} />
        <BackTop />
    </GallerySpace>
    )
};