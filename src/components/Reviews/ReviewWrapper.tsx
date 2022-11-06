import { ApolloError } from '@apollo/client';
import { Button, Result, Spin } from 'antd';
import { useNavigate } from 'react-router-dom';
import { CocktailQuery } from '../../generate/graphql';
import { CocktailWrapperSpace } from '../Favorites/FavoritesAntStyle';
import { ReviewCard } from './ReviewCard';

type ReviewWrapperProps = {
    data: CocktailQuery | undefined,
    loading: boolean,
    error: ApolloError | undefined
}

export const ReviewWrapper = ({ data, loading, error }: ReviewWrapperProps) => {

    const navigate = useNavigate();

  return (
    <>
        {data && <CocktailWrapperSpace wrap={true}>
          {data.cocktail?.reviews?.map((review) => <ReviewCard key={review.id} review={review} />)}
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
