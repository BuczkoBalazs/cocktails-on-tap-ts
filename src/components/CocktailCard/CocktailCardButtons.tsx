import { useContext } from 'react';
import 'antd/dist/antd.css';
import { SortButton } from '../Gallery/GalleryAntStyle';
import { Cocktail, useConnectUserMutation, useDeleteCocktailMutation, useDisconnectUserMutation } from '../../generate/graphql';
import { LoginContext } from '../contexts/LoginContext';
import { Link } from 'react-router-dom';

export const CocktailCardButtons = ({ cocktail }: { cocktail: Cocktail }) => {

    const loginContext = useContext(LoginContext);
    
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

    const likedByUSer = cocktail.users?.filter(user => user.id === loginContext.user.id).length;

    const [connectUser] = useConnectUserMutation();
    const [disconnectUser] = useDisconnectUserMutation();

    const favoriteToggle = async () => {
        likedByUSer! > 0 ?
        await disconnectUser({ variables: {
            input: {
                userID: loginContext.user.id,
                cocktailID: cocktail.id
            }
        }}) :
        await connectUser({ variables: {
            input: {
                userID: loginContext.user.id,
                cocktailID: cocktail.id
            }
        }})
    };


    return (
    <>
        <Link to={`/reviews/${cocktail.id}`}>
            <SortButton shape='round'>Reviews</SortButton>
        </Link>
        <SortButton shape='round' onClick={favoriteToggle}>
            {likedByUSer! > 0 ? 'Favorite' : 'Not favorite'}
        </SortButton>     
        <SortButton shape='round' onClick={() => deleteCocktailHandle(cocktail.id.toString())}>Delete</SortButton>
    </>
    )
};