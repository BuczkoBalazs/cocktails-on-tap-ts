import { CocktailAnt } from '../CocktailCard/CocktailAnt';
import { Button, Spin, Result } from 'antd';
import 'antd/dist/antd.css';
import { CocktailWrapperSpace } from '../Favorites/FavoritesAntStyle';
import { CocktailDetails } from '../Type/CocktailDetailsType';

type GalleryCocktailWrapperProps = {
    cocktails: CocktailDetails[],
    searchInput: string,
    deleteCocktail: (id: number) => void,
    favoriteToggle: (id: number, name: string, howTo: string, ingredients: string, image: string, favorite: boolean) => void,
    loading: boolean,
    error: string | null
};

export const GalleryCocktailWrapper = ({ cocktails, searchInput, deleteCocktail, favoriteToggle, loading, error  }: GalleryCocktailWrapperProps) => {

    console.log("GalleryCocktailWrapper rendered");

    return (
    <CocktailWrapperSpace wrap={true}>
        {cocktails.length > 0 && cocktails.map((cocktail: CocktailDetails) => cocktail.name.toLowerCase().includes(searchInput.toLowerCase()) && <CocktailAnt key={cocktail.id} cocktail={cocktail} deleteCocktail={deleteCocktail} favoriteToggle={favoriteToggle} />
        )}
        {loading && <Spin />}
        {error && <Result
        status="500"
        title="500"
        subTitle={error}
        extra={<Button type="link" href='http://localhost:3000/'>Back Home</Button>}
        />}
    </CocktailWrapperSpace>
    )
};