import { useState, useEffect} from 'react';
import { CocktailDetails } from '../types/Types';

export const useFetch = (url: string) => {

    const [data, setData] = useState<CocktailDetails[] | []>([]);

    const getCocktails = async (link: string) => {

        const response = await fetch(link);
        if(!response.ok) {
            throw Error('Something went wrong during fetch!')
        }
        const responseJSON = await response.json();
        return setData(responseJSON);
    }

    useEffect(() => {
        getCocktails(url)
            .catch(err => console.log(err.message))
    }, [url]);

    return { data }
}
