import { Button, Form, Input, InputNumber, message} from 'antd';
import 'antd/dist/antd.css';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddUserMutation } from '../../generate/graphql';
import { AddForm, AddSpace } from '../AddCocktail/AddCocktailStyle';
import { LoginContext } from '../contexts/LoginContext';

type AddUserFormValue = {
    name: string,
    email: string,
    age: number
  };

export const AddUser = () => {

    const [newUser] = useAddUserMutation();
    const navigate = useNavigate();
    const loginContext = useContext(LoginContext);

    const onFinish = async (values: AddUserFormValue) => {
        await newUser({ variables: { input: {
            name: values.name,
            email: values.email,
            age: values.age
        }},
        update(cache, { data }) {
            const cacheId = cache.identify(data?.addUser!);
            loginContext.setUser({id: data?.addUser.id!, name: data?.addUser.name!});
            cache.modify({
                fields: {
                    users: (existingUsers, { toReference }) => {
                        return [...existingUsers, toReference(cacheId!)]
                    }
                }
            })
        }
        })
        navigate("/gallery");
        await message.success(`${values.name} has been registered successfully.`);
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
        onFinish={(values) => onFinish(values as AddUserFormValue)}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="name"
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
