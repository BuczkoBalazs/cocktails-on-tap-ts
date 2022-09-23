import { Divider, Typography } from 'antd';
import 'antd/dist/antd.css';
import { CocktailInfoSpace } from './CocktailAntStyle';

const { Paragraph } = Typography;

type CocktailDetails = {
    id: number,
    name: string,
    howTo: string,
    ingredients: string,
    image: string,
    favorite: boolean
};

type CocktailInfoWrapperProps = {
    cocktail: CocktailDetails
};

export const CocktailInfoWrapper = ({ cocktail }: CocktailInfoWrapperProps) => {
  return (
    <CocktailInfoSpace direction='vertical'>
        <Divider orientation='left'>How to make:</Divider>
        <Paragraph>{cocktail.howTo}</Paragraph>
        <Divider orientation='left'>Ingredients:</Divider>
        <Paragraph>{cocktail.ingredients}</Paragraph>
    </CocktailInfoSpace>
  )
}
