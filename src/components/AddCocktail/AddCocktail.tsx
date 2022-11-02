import { Button, Form, Input, message, Select } from 'antd';
import 'antd/dist/antd.css';
import { AddForm, AddSpace } from './AddCocktailStyle';
import { useAddCocktailMutation } from '../../generate/graphql';

const { Option } = Select;

type AddCocktailFormValue = {
  name: string,
  howTo: string,
  ingredients: string,
  image: string,
  favorite: string
};

export const AddCocktail = () => {

  const [form] = Form.useForm();
  const [newCocktail] = useAddCocktailMutation();
  
  const onFinish = async (values: AddCocktailFormValue) => {
    await newCocktail({variables: { input: {
      name: values.name,
      howTo: values.howTo,
      ingredients: values.ingredients,
      image: values.image,
      favorite: JSON.parse(values.favorite)
    }},
    update(cache, { data }) {

      const cacheId = cache.identify(data?.addCocktail!)
      cache.modify({
        fields: {
          cocktails: (existingFieldData, { toReference }) => {
            return [...existingFieldData, toReference(cacheId!)]
          }
        }
      })
    }
    });
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
        label="Name of cocktail"
        name="name"
        rules={[{ required: true, message: 'Please input the name of cocktail!' }, { whitespace: true}, { min: 3}]}
        hasFeedback
      >
        <Input />
      </Form.Item>
  
      <Form.Item
        label="How to make"
        name="howTo"
        rules={[{ required: true, message: 'Please input how to make the cocktail!' }, { whitespace: true}, { min: 3}]}
        hasFeedback
      >
        <Input />
      </Form.Item>
  
      <Form.Item
        label="Ingredients"
        name="ingredients"
        rules={[{ required: true, message: 'Please input the ingredients needed!' }, { whitespace: true}, { min: 3}]}
        hasFeedback
      >
        <Input />
      </Form.Item>
  
      <Form.Item
        label="URL of image"
        name="image"
        rules={[{ required: true, message: 'Please enter the url of the picture!' }, { type: "url", message: "Please enter a valid url!" }]}
        hasFeedback
      >
        <Input />
      </Form.Item>
  
      <Form.Item
        label="Favorite"
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