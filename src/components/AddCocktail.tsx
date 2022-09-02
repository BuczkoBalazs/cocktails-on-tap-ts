import { Button, Form, Input, message, Select } from 'antd';
import 'antd/dist/antd.css';
import { AddForm, AddSpace } from './AddCocktailStyle';

const { Option } = Select;

export const AddCocktail = () => {

  const onFinish = async (values: any) => {
      await fetch('http://localhost:3001/cocktails/', {
        method: 'POST',
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          howto: values.howto,
          ingredients: values.ingredients,
          image: values.image,
          favourite: JSON.parse(values.favourite),
        }),
      })
      message.success(`${values.name} has been added.`);
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
        <Select>
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
