import { gql, useQuery } from '@apollo/client';
import { CocktailDetails } from '../../components/Type/CocktailDetailsType';

type CocktailDetailsArray = {
    cocktails: CocktailDetails[]
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

export const useGetCocktails = () => {

    const { data, loading, error, refetch } = useQuery<CocktailDetailsArray | null>(GET_COCKTAILS);

    return { data, loading, error, refetch}
};
