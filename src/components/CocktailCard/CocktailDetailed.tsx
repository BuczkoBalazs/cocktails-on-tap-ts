import { Image, Space } from 'antd';
import 'antd/dist/antd.css';
import { CocktailInfoWrapper } from './CocktailInfoWrapper';
import { CocktailDetails } from '../Type/CocktailDetailsType';

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
