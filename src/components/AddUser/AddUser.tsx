import { Button, Form, Input, InputNumber, message} from 'antd';
import 'antd/dist/antd.css';
import { AddForm, AddSpace } from '../AddCocktail/AddCocktailStyle';

type AddCocktailFormValue = {
    name: string,
    howTo: string,
    ingredients: string,
    image: string,
    favorite: string
  };

export const AddUser = () => {

    const [form] = Form.useForm();
    
    const onFinish = async (values: AddCocktailFormValue) => {
      form.resetFields();
      await message.success(`${values.name} has been added.`);
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
        form={form}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        onFinish={(values) => onFinish(values as AddCocktailFormValue)}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
        <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please write your username here' }, { whitespace: true}, { min: 3}]}
            hasFeedback
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="E-mail"
            name="email"
            rules={[{ required: true, message: 'Please give your e-mail address' }, { type: "email"}]}
            hasFeedback
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Age"
            name="age"
            rules={[{ required: true, message: 'Please enter your age!' }]}
            hasFeedback
        >
            <InputNumber style={{ width: '100%' }} />
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
