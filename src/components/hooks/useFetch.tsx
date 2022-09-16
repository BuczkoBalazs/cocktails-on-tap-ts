import { useState, useEffect} from 'react';

export const useFetch = <T,>(url: string): {data: T | [], loading: boolean, error: string | null} => {

    const [data, setData] = useState<T | []>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const getCocktails = async (link: string) => {

        const abortController = new AbortController();

        const response = await fetch(link, {signal: abortController.signal});
        if(!response.ok) {
            throw Error('Something went wrong during fetch!')
        }
        const responseJSON = await response.json();
        return responseJSON;
    }

    useEffect(() => {

        const abortFetch = new AbortController();

        getCocktails(url)
        .then(data => {
            setData(data);
            setLoading(false);
            setError(null);
        }
        )
        .catch(err => {
            if (err.name === 'AbortError') {
                console.log('Fetch aborted.')
            } else {
                setLoading(false);
                setError(err.message);
            }
        })

        return () => abortFetch.abort();

    }, [url]);

    return { data, loading, error }
}
