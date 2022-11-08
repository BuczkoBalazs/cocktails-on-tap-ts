import { Button, Result, Spin } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useReviewsQuery } from '../../generate/graphql';
import { CocktailWrapperSpace } from '../Favorites/FavoritesAntStyle';
import { ReviewCard } from './ReviewCard';


export const ReviewWrapper = ({ id }: { id: string | undefined }) => {

  const navigate = useNavigate();

  const { data, loading, error } = useReviewsQuery();

  return (
    <>
        {data && <CocktailWrapperSpace wrap={true}>
          {data?.reviews?.map(review => review?.cocktail?.id === parseInt(id!) && <ReviewCard key={review.id} id={id} review={review} />)}
        </CocktailWrapperSpace>}
        {loading && <Spin />}
        {error && <Result
        status="500"
        title="500"
        subTitle={error.message}
        extra={<Button type="primary" onClick={() => navigate('/')}>Back Home</Button>}
        />}
    </>
  )
}
