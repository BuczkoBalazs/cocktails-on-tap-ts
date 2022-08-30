import React, { useState } from 'react';
import { CocktailDetails } from '../types/Types';
import { Card, Image, Space, Divider, Button } from 'antd';
import 'antd/dist/antd.css';


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
    <Card title={name} extra={
        <Button onClick={favouriteToggle}>{fav === true ? 'Favourite' : 'Not favourite'}</Button>
    }>
        <Space>
            <Image src={image} alt={name} width={200}/>
            <Divider orientation='left' type="vertical" />
            <Space direction='vertical'>
                <Divider orientation='left'>How to make:</Divider>
                <p>{howto}</p>
                <Divider orientation='left'>Ingredients:</Divider>
                <p>{ingredients}</p>
            </Space>
        </Space>
    </Card>
    )
}
