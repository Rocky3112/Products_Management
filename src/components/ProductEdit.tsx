import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetProductByIdQuery, useUpdateProductMutation, useGetCategoriesQuery } from '../api/productsApi';
import { Form, Input, Button, Select } from 'antd';
import '../styles/customStyles.css';

const { Option } = Select;

const ProductEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: productData, error: productError, isLoading: productLoading } = useGetProductByIdQuery(Number(id));
  
  const { data: categories, error: categoriesError, isLoading: categoriesLoading } = useGetCategoriesQuery();

  const [updateProduct] = useUpdateProductMutation();

  const onFinish = (values: any) => {
    updateProduct({ id: Number(id), data: values });
    console.log('Form values:', values);
    navigate(`/product/${id}`);
  };

  if (productLoading || categoriesLoading) return <div>Loading...</div>;
  if (productError || categoriesError) return <div>Error loading product details or categories</div>;

  return (
    <Form
      layout="vertical"
      initialValues={productData}
      onFinish={onFinish}
      style={{ maxWidth: '600px', margin: 'auto' }}
    >
      <Form.Item name="title" label="Title" rules={[{ required: true, message: 'Please enter a title' }]}>
        <Input placeholder="Enter title" />
      </Form.Item>

      <Form.Item name="description" label="Description" rules={[{ required: true, message: 'Please enter a description' }]}>
        <Input.TextArea placeholder="Enter description" rows={4} />
      </Form.Item>

      <Form.Item name="price" label="Price" rules={[{ required: true, message: 'Please enter a price' }]}>
        <Input type="number" placeholder="Enter price" />
      </Form.Item>

      <Form.Item name="category" label="Category" rules={[{ required: true, message: 'Please select a category' }]}>
        <Select placeholder="Select category">
          {categories?.map((category: any) => (
            <Option key={category.slug} value={category.name}>
              {category.name}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item name="reviews" label="Reviews">
      <Form.List name="reviews">
  {(fields, { add, remove }) => (
    <>
      {fields.map(({ key, name, ...restField }) => (
        <Form.Item key={key}>
          <Form.Item
            {...restField}
            name={[name, 'review']}
            rules={[{ required: true, message: 'Please enter a review' }]}
          >
            <Input placeholder="Review" />
          </Form.Item>
          <Button type="link" onClick={() => remove(name)}>
            Remove
          </Button>
        </Form.Item>
      ))}
      <Button type="dashed" onClick={() => add()}>
        Add Review
      </Button>
    </>
  )}
</Form.List>

      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ProductEdit;
