import { useDeleteReviewMutation } from '../../generate/graphql';
import { SortButton } from '../Gallery/GalleryAntStyle';

type ReviewCardButtonProps = {
  review: {
      __typename?: "Review" | undefined;
      id: number;
      title: string;
      text: string;
      user?: {
          __typename?: "User" | undefined;
          id: number;
          name: string;
      } | null | undefined;
      cocktail?: {
          __typename?: "Cocktail" | undefined;
          id: number;
          name: string;
      } | null | undefined;
  } | null | undefined
}

export const ReviewCardButtons = ({ review }: ReviewCardButtonProps) => {

  const [deleteReview] = useDeleteReviewMutation();

  const deleteReviewHandle = async (id: number) => {
    await deleteReview(
        { variables: { deleteReviewId: id.toString() },
        update(cache) {

            const IdToDelete = review?.id

            cache.modify({
                fields: {
                    reviews: (existingFieldData, { readField }) => {
                        return existingFieldData.filter((review: ReviewCardButtonProps) => IdToDelete !== readField('id', review))
                    }
                }
            })
        }
    });
  };

  return (
    <>
      <SortButton shape='round' onClick={() => deleteReviewHandle(review!.id)} >Delete</SortButton>
    </>
  )
}
