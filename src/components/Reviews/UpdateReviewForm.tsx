import { Button, Form, Input, message, Space } from 'antd';
import { useContext } from 'react';
import { useUpdateReviewMutation } from '../../generate/graphql';
import { LoginContext } from '../contexts/LoginContext';

type UpdateReviewFormProps = {
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
  }


export const UpdateReviewForm = ({ review }: UpdateReviewFormProps) => {

    type UpdateReviewFormValue = {
        title: string,
        text: string,
      };

    const [updateReview] = useUpdateReviewMutation();
    const loginContext = useContext(LoginContext);
    const [form] = Form.useForm();

    const onFinish = async (values: UpdateReviewFormValue) => {
        await updateReview({
            variables: {
                updateReviewId: review!.id.toString(),
                input: {
                    title: values.title,
                    text: values.text,
                    postedBy: loginContext.user.id.toString(),
                    postedAbout: review!.cocktail!.id.toString()
                }
            }
        })
        form.resetFields();
        await message.success(`${values.title} has been updated.`);
        console.log('Success:', values);
      };

    const onFinishFailed = (errorInfo: any) => {
        message.error('Something went wrong!');
        console.log('Failed:', errorInfo);
      };

    return (
    <Space>
        <Form
        name="basic"
        form={form}
        initialValues={{title: review?.title, text: review?.text}}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        onFinish={(values) => onFinish(values as UpdateReviewFormValue)}
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
        </Form>
    </Space>
    )
}
