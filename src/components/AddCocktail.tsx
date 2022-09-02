import React from 'react';
import { Button, Form, Input, Select } from 'antd';
import 'antd/dist/antd.css';

const { Option } = Select;

export const AddCocktail = () => {

    const onFinish = (values: any) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };

    return (
    <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
    >
        <Form.Item
          label="Name of cocktail"
          name="name"
          rules={[{ required: true, message: 'Please input the name of cocktail!' }]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="How to make"
          name="howto"
          rules={[{ required: true, message: 'Please input how to make the cocktail!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Ingredients"
          name="ingredients"
          rules={[{ required: true, message: 'Please input the ingredients needed!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="URL of image"
          name="image"
          rules={[{ required: true, message: 'Please enter the url of the picture!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Ingredients"
          name="ingredients"
          rules={[{ required: true, message: 'Please input the ingredients needed!' }]}
        >
          <Select defaultValue='Favourite'>
            <Option value='Favourite'>Favourite</Option>
            <Option value='Not Favourite'>Not Favourite</Option>
          </Select>
        </Form.Item>
  
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
    </Form>
    )
}
