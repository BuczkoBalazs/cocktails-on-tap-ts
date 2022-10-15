import { useMutation, gql } from '@apollo/client';
import { Button, Form, Input, message, Select } from 'antd';
import 'antd/dist/antd.css';
import { AddForm, AddSpace } from './AddCocktailStyle';
import { CocktailDetails } from '../Type/CocktailDetailsType';

const { Option } = Select;

const NEW_COCKTAIL = gql`
  mutation addCocktail($input: AddCocktailInput!) {
    addCocktail(input: $input) {
      id
      name
      howTo
      ingredients
      image
      favorite
    }
  }
`;

type AddCocktailFormValue = {
  name: string,
  howTo: string,
  ingredients: string,
  image: string,
  favorite: string
};

type AddCocktailInput = {
  name: string,
  howTo: string,
  ingredients: string,
  image: string,
  favorite: boolean
};

export const AddCocktail = () => {

  const [newCocktail] = useMutation<{ newCocktail: CocktailDetails }, { input: AddCocktailInput }>(NEW_COCKTAIL);
  
  const onFinish = (values: AddCocktailFormValue) => {
      newCocktail({variables: { input: {
        name: values.name,
        howTo: values.howTo,
        ingredients: values.ingredients,
        image: values.image,
        favorite: JSON.parse(values.favorite)
      }}});
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
    onFinish={(values) => onFinish(values as AddCocktailFormValue)}
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
        name="howTo"
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
        label="favorite"
        name="favorite"
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
)};