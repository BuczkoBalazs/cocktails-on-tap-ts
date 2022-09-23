import { Image, Space } from 'antd';
import 'antd/dist/antd.css';
import { CocktailInfoWrapper } from './CocktailInfoWrapper';

type CocktailDetails = {
    id: number,
    name: string,
    howTo: string,
    ingredients: string,
    image: string,
    favorite: boolean
};

type CocktailDetailedProps = {
    cocktail: CocktailDetails
};

export const CocktailDetailed = ({ cocktail }: CocktailDetailedProps) => {
  return (
    <Space>
        <Image src={cocktail.image} alt={cocktail.name} width={200}/>
        <CocktailInfoWrapper cocktail={cocktail} />
    </Space>
  )
}
