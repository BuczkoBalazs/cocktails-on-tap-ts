import { useState } from 'react';
import { CocktailDetails } from '../types/Types';
import { Divider, Image, Space, Typography } from 'antd';
import 'antd/dist/antd.css';
import { SortButton } from './GalleryAntStyle';
import { CocktailCard, CocktailInfoSpace } from './CocktailAntStyle';

const { Paragraph } = Typography;

export const CocktailAnt = ({ id, name, howto, ingredients, image, favourite }: CocktailDetails) => {

    const [fav, setFav] = useState<boolean>(favourite);

    const favouriteToggle = async () => {
        await fetch('http://localhost:3001/cocktails/' + id, {
            method: 'PUT',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                id: id,
                name: name,
                howto: howto,
                ingredients: ingredients,
                image: image,
                favourite: !fav
            }),
        });
        setFav(!fav)
    };

    return (
    <CocktailCard hoverable title={name} extra={
        <SortButton shape='round' onClick={favouriteToggle}>{fav === true ? 'Favourite' : 'Not favourite'}</SortButton>
    }>
        <Space>
            <Image src={image} alt={name} width={200}/>
            <CocktailInfoSpace direction='vertical'>
                <Divider orientation='left'>How to make:</Divider>
                <Paragraph>{howto}</Paragraph>
                <Divider orientation='left'>Ingredients:</Divider>
                <Paragraph>{ingredients}</Paragraph>
            </CocktailInfoSpace>
        </Space>
    </CocktailCard>
    )
}
