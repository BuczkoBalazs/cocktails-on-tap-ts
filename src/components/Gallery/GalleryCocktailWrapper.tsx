import { ApolloError } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { CocktailAnt } from '../CocktailCard/CocktailAnt';
import { Button, Spin, Result } from 'antd';
import 'antd/dist/antd.css';
import { CocktailWrapperSpace } from '../Favorites/FavoritesAntStyle';
import { CocktailDetails } from '../Type/CocktailDetailsType';

type GalleryCocktailWrapperProps = {
    data: CocktailDetailsArray | null | undefined,
    searchInput: string,
    deleteCocktail: (id: number) => void,
    favoriteToggle: (id: number, name: string, howTo: string, ingredients: string, image: string, favorite: boolean) => void,
    loading: boolean,
    error: ApolloError | undefined
};

type CocktailDetailsArray = {
    cocktails: CocktailDetails[]
};

export const GalleryCocktailWrapper = ({ data, searchInput, deleteCocktail, favoriteToggle, loading, error  }: GalleryCocktailWrapperProps) => {

    const navigate = useNavigate();

    return (
    <CocktailWrapperSpace wrap={true}>
        {data && data.cocktails.map((cocktail: CocktailDetails) => cocktail.name.toLowerCase().includes(searchInput.toLowerCase()) && <CocktailAnt key={cocktail.id} cocktail={cocktail} deleteCocktail={deleteCocktail} favoriteToggle={favoriteToggle} />
        )}
        {loading && <Spin />}
        {error && <Result
        status="500"
        title="500"
        subTitle={error.message}
        extra={<Button type="primary" onClick={() => navigate('/')}>Back Home</Button>}
        />}
    </CocktailWrapperSpace>
    )
};