import { ApolloError } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { CocktailAnt } from '../CocktailCard/CocktailAnt';
import { Button, Spin, Result } from 'antd';
import 'antd/dist/antd.css';
import { CocktailWrapperSpace } from '../Favorites/FavoritesAntStyle';
import { CocktailDetails } from '../Type/CocktailDetailsType';

type GalleryCocktailWrapperProps = {
    cocktails: CocktailDetails[] | undefined,
    searchInput: string,
    deleteCocktailHandle: (id: number) => void,
    favoriteToggle: (id: number, name: string, howTo: string, ingredients: string, image: string, favorite: boolean) => void,
    loading: boolean,
    error: ApolloError | undefined
};

export const GalleryCocktailWrapper = ({ cocktails, searchInput, deleteCocktailHandle, favoriteToggle, loading, error  }: GalleryCocktailWrapperProps) => {

    const navigate = useNavigate();

    return (
    <CocktailWrapperSpace wrap={true}>
        {cocktails && cocktails.map((cocktail: CocktailDetails) => cocktail.name.toLowerCase().includes(searchInput.toLowerCase()) && <CocktailAnt key={cocktail.id} cocktail={cocktail} deleteCocktailHandle={deleteCocktailHandle} favoriteToggle={favoriteToggle} />
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