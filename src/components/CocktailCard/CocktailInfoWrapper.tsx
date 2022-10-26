import { Divider, Typography } from 'antd';
import 'antd/dist/antd.css';
import { CocktailInfoSpace } from './CocktailAntStyle';
import { Cocktail } from '../../generate/graphql';

const { Paragraph } = Typography;

export const CocktailInfoWrapper = ({ cocktail }: {cocktail: Cocktail}) => {
  return (
    <CocktailInfoSpace direction='vertical'>
      <Divider orientation='left'>How to make:</Divider>
      <Paragraph>{cocktail.howTo}</Paragraph>
      <Divider orientation='left'>Ingredients:</Divider>
      <Paragraph>{cocktail.ingredients}</Paragraph>
    </CocktailInfoSpace>
  )
};