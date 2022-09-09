import { useState, useEffect} from 'react';

export const useFetch = <T,>(url: string): {data: T | []} => {

    const [data, setData] = useState<T | []>([]);

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
