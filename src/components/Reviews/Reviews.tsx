import { BackTop, Typography } from 'antd';
import { useParams } from 'react-router-dom';
import { useCocktailQuery } from '../../generate/graphql';
import { FavSpace } from '../Favorites/FavoritesAntStyle';
import { ReviewWrapper } from './ReviewWrapper';

const { Title } = Typography;

export const Reviews = () => {

  const { id } = useParams();

  const { data, loading, error } = useCocktailQuery({ variables: { cocktailId: id! }});

  return (
    <FavSpace direction='vertical'>
      <Title>Here you find the reviews of ${data?.cocktail?.name} cocktail!</Title>
      <ReviewWrapper data={data} loading={loading} error={error} />
      <BackTop />
    </FavSpace>
  )
}
