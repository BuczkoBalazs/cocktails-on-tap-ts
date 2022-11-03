import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Spin, Result } from 'antd';
import { CocktailAnt } from '../CocktailCard/CocktailAnt';
import 'antd/dist/antd.css';
import { CocktailWrapperSpace } from './FavoritesAntStyle';
import { useUserQuery } from '../../generate/graphql';
import { LoginContext } from '../contexts/LoginContext';


export const FavoritesCocktailWrapper = React.memo( () => {

    const loginContext = useContext(LoginContext);
    const { data, loading, error } = useUserQuery({ variables: {
        userId: loginContext.user.id.toString()
    }});

    const navigate = useNavigate();

    return (
        <>
            {data && <CocktailWrapperSpace wrap={true}>
                {data.user?.cocktails!.map((cocktail) => <CocktailAnt key={cocktail.id} cocktail={cocktail} />)}
            </CocktailWrapperSpace>
            }
            {loading && <Spin />}
            {error && <Result
                status="500"
                title="500"
                subTitle={error.message}
                extra={<Button type="primary" onClick={() => navigate('/')}>Back Home</Button>}
            />}
        </>
    )
});
