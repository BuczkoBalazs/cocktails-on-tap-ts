import { Button, Form, Input, message } from 'antd';
import { useContext } from 'react';
import { useAddReviewMutation } from '../../generate/graphql';
import { AddForm, AddSpace } from '../AddCocktail/AddCocktailStyle';
import { LoginContext } from '../contexts/LoginContext';

export const AddReviewForm = ({ id }: { id: string | undefined }) => {

    type AddReviewFormValue = {
        title: string,
        text: string,
      };

    const [addReview] = useAddReviewMutation(); 
    const loginContext = useContext(LoginContext);

    const onFinish = async (values: AddReviewFormValue) => {
        await addReview({
            variables: {
                input: {
                    title: values.title,
                    text: values.text,
                    postedBy: loginContext.user.id.toString(),
                    postedAbout: id!
                }
            },
            update(cache, { data }) {

                const cacheID = cache.identify(data?.addReview!)
                cache.modify({
                    fields: {
                        reviews: (existingReviews, { toReference }) => {
                            return [...existingReviews, toReference(cacheID!)]
                        }
                    }
                })
            }
        })
        await message.success(`${values.title} has been added.`);
        console.log('Success:', values);
      };

    const onFinishFailed = (errorInfo: any) => {
        message.error('Something went wrong!');
        console.log('Failed:', errorInfo);
      };

    return (
    <AddSpace>
        <AddForm
        name="basic"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        onFinish={(values) => onFinish(values as AddReviewFormValue)}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
            <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: 'Please enter the title of your review!' }, { whitespace: true}, { min: 3}]}
            hasFeedback
            >
                <Input />
            </Form.Item>

            <Form.Item
            label="Review text"
            name="text"
            rules={[{ required: true, message: 'Please enter the text of your review!' }, { whitespace: true}, { min: 3}]}
            hasFeedback
            >
                <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </AddForm>
    </AddSpace>

    )
}
