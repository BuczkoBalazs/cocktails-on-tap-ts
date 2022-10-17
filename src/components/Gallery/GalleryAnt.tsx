import React, { useState } from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
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

type UpdatedCocktailInput = {
    name: string,
    howTo: string,
    ingredients: string,
    image: string,
    favorite: boolean
};

const GET_COCKTAILS = gql`
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
`;
const TOGGLE_FAVORITES = gql`
    mutation updateCocktail($updateCocktailId: ID!, $input: UpdateCocktailInput!) {
        updateCocktail(id: $updateCocktailId, input: $input) {
            name
            howTo
            ingredients
            image
            favorite
        }
    }
`;

const DELETE_COCKTAIL = gql`
    mutation deleteCocktail($deleteCocktailId: ID!) {
        deleteCocktail(id: $deleteCocktailId)
    }
`;

export const GalleryAnt = () => {
    
    const { data, loading, error, refetch} = useQuery<CocktailDetailsArray | null>(GET_COCKTAILS);

    const [updateCocktail] = useMutation<{ updateCocktail: CocktailDetails}, { updateCocktailId: number, input: UpdatedCocktailInput }>(TOGGLE_FAVORITES);

    const [deleteCocktail] = useMutation<{ deleteCocktail: boolean }, { deleteCocktailId: number }>(DELETE_COCKTAIL);
    
    const [searchInput, setSearchInput] = useState<string>('');
    const [sortButton, setSortButton] = useState<SortCocktails>(SortCocktails.ASC);

    const inputChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => setSearchInput(e.target.value);

    const sortButtonChangeHandle = () => {
        data?.cocktails?.sort((a: CocktailDetails, b: CocktailDetails) => sortButton === SortCocktails.ASC ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
        setSortButton(sortButton === SortCocktails.ASC ? SortCocktails.DESC : SortCocktails.ASC);
    };

    const deleteCocktailHandle = async (id: number) => {
        await deleteCocktail({ variables: { deleteCocktailId: id }});
        await refetch(GET_COCKTAILS);
    };

    const favoriteToggle = async (id: number, name: string, howTo: string, ingredients: string, image: string, favorite: boolean) => {
        await updateCocktail({ variables: { updateCocktailId: id, input: {
            name: name,
            howTo: howTo,
            ingredients: ingredients,
            image: image,
            favorite: favorite
        }}});
        await refetch(GET_COCKTAILS);
    };

    return (
    <GallerySpace direction='vertical'>
        <GalleryHeader searchInput={searchInput} inputChangeHandle={inputChangeHandle} sortButton={sortButton} sortButtonChangeHandle={sortButtonChangeHandle} />
        <GalleryCocktailWrapper  cocktails={data?.cocktails} searchInput={searchInput} deleteCocktailHandle={deleteCocktailHandle} favoriteToggle={favoriteToggle} loading={loading} error={error} />
        <BackTop />
    </GallerySpace>
    )
};