import { BackTop, Modal, Typography } from 'antd';
import 'antd/dist/antd.css';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCocktailQuery } from '../../generate/graphql';
import { FavSpace } from '../Favorites/FavoritesAntStyle';
import { SortButton } from '../Gallery/GalleryAntStyle';
import { AddReviewForm } from './AddReviewForm';
import { ReviewWrapper } from './ReviewWrapper';

const { Title } = Typography;

export const Reviews = () => {

  const { id } = useParams();

  const { data } = useCocktailQuery({ variables: { cocktailId: id! }});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <FavSpace direction='vertical'>
      <Title>Here you find the reviews of {data?.cocktail?.name} cocktail!</Title>
      <SortButton shape='round' onClick={() => setIsModalOpen(true)} >Add review</SortButton>
      <Modal title='Add you review!' visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <AddReviewForm id={id}/>
      </Modal>
      <ReviewWrapper id={id} />
      <Link to='/gallery'>
        <SortButton shape='round'>Back to Gallery</SortButton>
      </Link>
      <BackTop />
    </FavSpace>
  )
}
