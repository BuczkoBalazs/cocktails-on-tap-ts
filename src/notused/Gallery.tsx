import React, { useState, useEffect } from 'react';
import { CocktailDetails } from '../components/types/Types';
import { Cocktail } from './Cocktail';

export const Gallery = () => {

    // típusokat beírni => enum
    const [cocktails, setCocktails] = useState<CocktailDetails[] | []>([]);
    const [searchInput, setSearchInput] = useState('');
    const [sortByName, setSortByName] = useState('asc');
    const [sortButton, setSortButton] = useState('Sort ascending')

    const getCocktails = async () => {

        const response = await fetch('http://localhost:3001/cocktails');
        const responseJSON = await response.json();
        setCocktails(responseJSON);
    }

    useEffect(() => {
        getCocktails();
    }, []);


    const inputChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => setSearchInput(e.target.value);

    const sortButtonChangeHandle = () => {
        setCocktails([...cocktails.sort( (a,b) => sortByName === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))]);
        setSortByName(sortByName === 'asc' ? 'desc' : 'asc');
        setSortButton(sortButton === 'Sort ascending' ? 'Sort descending' : 'Sort ascending');
    }
    /* react comp-ba kiszervezni a div-et, komponens-t*/
    return (
    <div className='gallery-wrapper'>
        <div className='filters'>
        <h1>Welcome to our gallery! Feel free to browse.</h1>
            <label>Search by name</label>
            <input type="text" name="search" id="search" value={searchInput} onChange={inputChangeHandle} />
            <button className='sort-by-name' onClick={sortButtonChangeHandle} >{sortButton}</button>
        </div>
        <div className='cocktails-wrapper'>
            {cocktails && cocktails.map(({ id, name, howto, ingredients, image, favourite }) => name.toLowerCase().includes(searchInput.toLowerCase()) && <Cocktail key={id} id={id} name={name} howto={howto} ingredients={ingredients} image={image} favourite={favourite} />
            )}
        </div>
    </div>
    )
}
