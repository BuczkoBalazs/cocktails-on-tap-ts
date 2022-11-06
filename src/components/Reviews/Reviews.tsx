import { BackTop, Typography } from 'antd';
import { Link, useParams } from 'react-router-dom';
import { useCocktailQuery } from '../../generate/graphql';
import { FavSpace } from '../Favorites/FavoritesAntStyle';
import { SortButton } from '../Gallery/GalleryAntStyle';
import { ReviewWrapper } from './ReviewWrapper';

const { Title } = Typography;

export const Reviews = () => {

  const { id } = useParams();

  const { data, loading, error } = useCocktailQuery({ variables: { cocktailId: id! }});

  return (
    <FavSpace direction='vertical'>
      <Title>Here you find the reviews of {data?.cocktail?.name} cocktail!</Title>
      <SortButton shape='round'>Add review</SortButton>
      <ReviewWrapper data={data} loading={loading} error={error} />
      <Link to='/gallery'>
        <SortButton shape='round'>Back to Gallery</SortButton>
      </Link>
      <BackTop />
    </FavSpace>
  )
}
