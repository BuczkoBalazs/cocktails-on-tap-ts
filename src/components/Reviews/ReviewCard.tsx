import { Card } from 'antd';

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
    return (
    <Card title={review.title}>
        <p>Posted by: {review.user?.name}</p>
        <p>{review.text}</p>
    </Card>
    )
}
