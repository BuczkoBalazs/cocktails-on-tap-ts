import { Image, Space } from 'antd';
import 'antd/dist/antd.css';
import { CocktailInfoWrapper } from './CocktailInfoWrapper';
import { Cocktail } from '../../generate/graphql';

export const CocktailDetailed = ({ cocktail }: { cocktail: Cocktail }) => {
  return (
    <Space>
        <Image src={cocktail.image} alt={cocktail.name} width={200}/>
        <CocktailInfoWrapper cocktail={cocktail} />
    </Space>
  )
};