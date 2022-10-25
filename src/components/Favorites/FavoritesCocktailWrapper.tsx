import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Spin, Result } from 'antd';
import { CocktailAnt } from '../CocktailCard/CocktailAnt';
import 'antd/dist/antd.css';
import { CocktailWrapperSpace } from './FavoritesAntStyle';
import { CocktailDetails } from '../Type/CocktailDetailsType';
import { useGetCocktails } from '../hooks/useGetCocktails';


export const FavoritesCocktailWrapper = React.memo( () => {

    const { data, loading, error } = useGetCocktails();

    const navigate = useNavigate();

    return (
        <>
            {data && <CocktailWrapperSpace wrap={true}>
                {data.cocktails.map((cocktail: CocktailDetails) => cocktail.favorite && <CocktailAnt key={cocktail.id} cocktail={cocktail} />)}
                </CocktailWrapperSpace>
            }
            {loading && <Spin />}
            {error && <Result
                status="500"
                title="500"
                subTitle={error.message}
                extra={<Button type="primary" onClick={() => navigate('/')}>Back Home</Button>}
            />}
        </>
    )
});
