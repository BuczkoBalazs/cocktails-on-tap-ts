import { useState } from 'react';
import { Divider, Image, Space, Typography } from 'antd';
import 'antd/dist/antd.css';
import { SortButton } from '../Gallery/GalleryAntStyle';
import { CocktailCard, CocktailInfoSpace } from './CocktailAntStyle';

const { Paragraph } = Typography;

type CocktailDetails = {
    id: number,
    name: string,
    howto: string,
    ingredients: string,
    image: string,
    favourite: boolean
};

type CocktailAntProps = {
    cocktail: CocktailDetails,
    deleteCocktail: (id: number) => void
};

export const CocktailAnt = ({ cocktail, deleteCocktail }: CocktailAntProps ) => {

    const [fav, setFav] = useState<boolean>(cocktail.favourite);

    const favouriteToggle = async () => {
        await fetch('http://localhost:3001/cocktails/' + cocktail.id, {
            method: 'PUT',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                id: cocktail.id,
                name: cocktail.name,
                howto: cocktail.howto,
                ingredients: cocktail.ingredients,
                image: cocktail.image,
                favourite: !fav
            }),
        });
        setFav(!fav)
    };

    return (
    <CocktailCard hoverable title={cocktail.name} extra={
        <>
            <SortButton shape='round' onClick={favouriteToggle}>{fav ? 'Favourite' : 'Not favourite'}</SortButton>
            <SortButton shape='round' onClick={() => deleteCocktail(cocktail.id)}>Delete</SortButton>
        </>
    }>
        <Space>
            <Image src={cocktail.image} alt={cocktail.name} width={200}/>
            <CocktailInfoSpace direction='vertical'>
                <Divider orientation='left'>How to make:</Divider>
                <Paragraph>{cocktail.howto}</Paragraph>
                <Divider orientation='left'>Ingredients:</Divider>
                <Paragraph>{cocktail.ingredients}</Paragraph>
            </CocktailInfoSpace>
        </Space>
    </CocktailCard>
    )
}
