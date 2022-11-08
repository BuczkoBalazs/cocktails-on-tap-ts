import { Modal } from 'antd';
import { useState } from 'react';
import { useDeleteReviewMutation } from '../../generate/graphql';
import { SortButton } from '../Gallery/GalleryAntStyle';
import { UpdateReviewForm } from './UpdateReviewForm';

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
  } | null | undefined,
  id: string | undefined
}

export const ReviewCardButtons = ({ review, id }: ReviewCardButtonProps) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
      <SortButton shape='round' onClick={() => setIsModalOpen(true)} >Update</SortButton>
      <Modal title='Edit your review!' visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <UpdateReviewForm review={review} />
      </Modal>
      <SortButton shape='round' onClick={() => deleteReviewHandle(review!.id)} >Delete</SortButton>
    </>
  )
}
