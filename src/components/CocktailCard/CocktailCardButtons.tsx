import { useContext, useState } from 'react';
import 'antd/dist/antd.css';
import { SortButton } from '../Gallery/GalleryAntStyle';
import { Cocktail, useDeleteCocktailMutation, useUpdateCocktailMutation } from '../../generate/graphql';
import { LoginContext } from '../contexts/LoginContext';
import { Link } from 'react-router-dom';

export const CocktailCardButtons = ({ cocktail }: { cocktail: Cocktail }) => {

    const loginContext = useContext(LoginContext);

    const [updateCocktail] = useUpdateCocktailMutation();
    
    const [deleteCocktail] = useDeleteCocktailMutation();
    
    const deleteCocktailHandle = async (id: string) => {
        await deleteCocktail(
            { variables: { deleteCocktailId: id },
            update(cache) {

                const IdToDelete = cocktail.id
    
                cache.modify({
                    fields: {
                        cocktails: (existingFieldData, { readField }) => {
                            return existingFieldData.filter((cocktail: Cocktail) => IdToDelete !== readField('id', cocktail))
                        }
                    }
                })
            }
        });
    };
    
    const favoriteToggle = async (id: string, name: string, howTo: string, ingredients: string, image: string, favorite: boolean) => {
        await updateCocktail({ variables: { updateCocktailId: id, input: {
            name: name,
            howTo: howTo,
            ingredients: ingredients,
            image: image,
            favorite: favorite
        }}});
    };

    const [fav, setFav] = useState<boolean>(cocktail.favorite);
    const likedByUSer = cocktail.users?.filter(user => user.id === loginContext.user.id).length;

    return (
    <>
        <Link to={`/reviews/${cocktail.id}`}>
            <SortButton shape='round'>Reviews</SortButton>
        </Link>
        <SortButton shape='round' onClick={() => {
            favoriteToggle(cocktail.id.toString(), cocktail.name, cocktail.howTo, cocktail.ingredients, cocktail.image, !fav);
            setFav(!fav);
        }}>
            {likedByUSer! > 0 ? 'Favorite' : 'Not favorite'}
        </SortButton>     
        <SortButton shape='round' onClick={() => deleteCocktailHandle(cocktail.id.toString())}>Delete</SortButton>
    </>
    )
};