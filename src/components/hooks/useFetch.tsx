import { useState, useEffect} from 'react';

export const useFetch = <T,>(url: string): {data: T | null, loading: boolean, error: string | null} => {

    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const getCocktails = async (link: string) => {

        const response = await fetch(link);
        if(!response.ok) {
            throw Error('Something went wrong during fetch!')
        }
        const responseJSON = await response.json();
        return responseJSON;
    }

    useEffect(() => {
        getCocktails(url)
        .then(data => {
            setData(data);
            setLoading(false);
            setError(null);
        }
        )
        .catch(err => {
            setLoading(false);
            setError(err.message);
        })
    }, [url]);

    return { data, loading, error }
}
