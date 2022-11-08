import { useNavigate } from 'react-router-dom';
import { CocktailAnt } from '../CocktailCard/CocktailAnt';
import { Button, Spin, Result } from 'antd';
import 'antd/dist/antd.css';
import { CocktailWrapperSpace } from '../Favorites/FavoritesAntStyle';
import { useCocktailsQuery } from '../../generate/graphql';

export const GalleryCocktailWrapper = ({ searchInput }: { searchInput: string}) => {

    const { data, loading, error } = useCocktailsQuery();

    const navigate = useNavigate();

    return (
    <CocktailWrapperSpace wrap={true}>
        {data && data.cocktails!.map((cocktail) => cocktail.name.toLowerCase().includes(searchInput.toLowerCase()) && <CocktailAnt key={cocktail.id} cocktail={cocktail} />
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