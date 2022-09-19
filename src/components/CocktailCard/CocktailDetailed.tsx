import { Divider, Image, Space, Typography } from 'antd';
import 'antd/dist/antd.css';
import { CocktailInfoSpace } from './CocktailAntStyle';

const { Paragraph } = Typography;

type CocktailDetails = {
    id: number,
    name: string,
    howto: string,
    ingredients: string,
    image: string,
    favourite: boolean
};

type CocktailDetailedProps = {
    cocktail: CocktailDetails
};

export const CocktailDetailed = ({ cocktail }: CocktailDetailedProps) => {
  return (
    <Space>
        <Image src={cocktail.image} alt={cocktail.name} width={200}/>
        <CocktailInfoSpace direction='vertical'>
            <Divider orientation='left'>How to make:</Divider>
            <Paragraph>{cocktail.howto}</Paragraph>
            <Divider orientation='left'>Ingredients:</Divider>
            <Paragraph>{cocktail.ingredients}</Paragraph>
        </CocktailInfoSpace>
    </Space>
  )
}
