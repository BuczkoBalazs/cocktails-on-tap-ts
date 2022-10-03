import { Divider, Typography } from 'antd';
import 'antd/dist/antd.css';
import { CocktailInfoSpace } from './CocktailAntStyle';
import { CocktailDetails } from '../Type/CocktailDetailsType';

const { Paragraph } = Typography;

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
};