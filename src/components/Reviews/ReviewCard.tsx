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
    }
}

export const ReviewCard = ({ review }: ReviewCardProps) => {

    const loginContext = useContext(LoginContext);

    return (
    <Card title={review.title} extra={loginContext.user.id === review.user?.id && <ReviewCardButtons />}>
        <p>Posted by: {review.user?.name}</p>
        <p>{review.text}</p>
    </Card>
    )
}
