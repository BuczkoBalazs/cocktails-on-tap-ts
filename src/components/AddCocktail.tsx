import React from 'react';
import { Button, Form, Input, Select, Space } from 'antd';
import 'antd/dist/antd.css';
import styled from '@emotion/styled';
import { CocktailDetails } from './types/Types';

import background from '../image/landing4.jpg'

const { Option } = Select;

export const AddCocktail = () => {

  const onFinish = async (values: any) => {
      await fetch('http://localhost:3001/cocktails/', {
        method: 'POST',
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(values),
      })
      console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };


  const AddSpace = styled(Space)( () => ({
    width: '100%',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }));

  const AddForm = styled(Form)( () => ({
    width: '600px',
    height: '60vh',
    marginTop: '100px',
    padding: '50px',
    background: 'rgba(255,255,255, 0.3)',
    boxShadow: 'rgb(0 0 0 / 90%) 0px 2px 8px',
    backdropFilter: 'blur(10px)'
  }));

  return (

  <AddSpace>
    <AddForm
    name="basic"
    labelCol={{ span: 6 }}
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
        label="Favourite"
        name="favourite"
        rules={[{ required: true, message: 'Please input the ingredients needed!' }]}
      >
        <Select defaultValue='Yes'>
          <Option value='true'>Yes</Option>
          <Option value='false'>No</Option>
        </Select>
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
