import { Card } from 'antd';
import { useContext } from 'react';
import { LoginContext } from '../contexts/LoginContext';
import { ReviewCardButtons } from './ReviewCardButtons';

type ReviewCardProps = {
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

export const ReviewCard = ({ review, id }: ReviewCardProps) => {

    const loginContext = useContext(LoginContext);

    return (
    <Card title={review?.title} extra={loginContext.user.id === review?.user?.id && <ReviewCardButtons id={id} review={review} />}>
        <p>Posted by: {review?.user?.name}</p>
        <p>{review?.text}</p>
    </Card>
    )
}
