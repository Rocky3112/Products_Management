import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetProductByIdQuery } from '../api/productsApi';
import { Button, Descriptions } from 'antd';
import '../styles/customStyles.css';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useGetProductByIdQuery(Number(id));
  const navigate = useNavigate();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading product details</div>;

  return (
    <div>
      <Descriptions title="Product Details" bordered>
        <Descriptions.Item label="Title">{data?.title}</Descriptions.Item>
        <Descriptions.Item label="Description">{data?.description}</Descriptions.Item>
        <Descriptions.Item label="Price">{data?.price}</Descriptions.Item>
        <Descriptions.Item label="Category">{data?.category}</Descriptions.Item>
      </Descriptions>
      <Button type="primary" onClick={() => navigate(`/edit-product/${id}`)}>Edit Product</Button>
    </div>
  );
};

export default ProductDetail;
