import { Button, Spin, Result } from 'antd';
import { CocktailAnt } from '../CocktailCard/CocktailAnt';
import 'antd/dist/antd.css';
import { CocktailWrapperSpace } from './FavouritesAntStyle';
import { useFetch } from '../hooks/useFetch';

type CocktailDetails = {
    id: number,
    name: string,
    howto: string,
    ingredients: string,
    image: string,
    favourite: boolean
};

export const FavouritesCocktailWrapper = () => {

    const { data: cocktails, loading, error } = useFetch<CocktailDetails[]>('http://localhost:3001/cocktails');

    const deleteCocktail = async (id: number) => {
        await fetch('http://localhost:3001/cocktails/' + id, {
            method: 'DELETE'
        })     
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

    return (
        <>
            {cocktails.length > 0 && <CocktailWrapperSpace wrap={true}>
                {cocktails.map((cocktail: CocktailDetails) => cocktail.favourite && <CocktailAnt key={cocktail.id} cocktail={cocktail} deleteCocktail={deleteCocktail} favouriteToggle={favouriteToggle} />)}
                </CocktailWrapperSpace>
            }
            {loading && <Spin />}
            {error && <Result
                status="500"
                title="500"
                subTitle={error}
                extra={<Button type="link" href='http://localhost:3000/'>Back Home</Button>}
            />}
        </>
    )
}
