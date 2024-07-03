import { useParams, useNavigate } from "react-router-dom";
import { useGetProductByIdQuery } from "../api/productsApi";
import { Button, Card, Descriptions, Typography, Spin } from "antd";
import { EditOutlined } from "@ant-design/icons";
import "../styles/customStyles.css";

const { Title, Paragraph } = Typography;

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useGetProductByIdQuery(Number(id));
  const navigate = useNavigate();

  if (isLoading) return <Spin size="large" className="loading-spinner" />;
  if (error)
    return <div className="error-message">Error loading product details</div>;

  return (
    <Card
      title={<Title level={2}>{data?.title}</Title>}
      extra={
        <Button
          type="primary"
          icon={<EditOutlined />}
          onClick={() => navigate(`/edit-product/${id}`)}
        >
          Edit Product
        </Button>
      }
      className="product-detail-card"
    >
      <Descriptions bordered column={1}>
        <Descriptions.Item label="Title">{data?.title}</Descriptions.Item>
        <Descriptions.Item label="Description">
          <Paragraph>{data?.description}</Paragraph>
        </Descriptions.Item>
        <Descriptions.Item label="Price">${data?.price}</Descriptions.Item>
        <Descriptions.Item label="Category">{data?.category}</Descriptions.Item>
        <Descriptions.Item label="Reviews">
          {data?.reviews?.map((review: any, index: number) => (
            <div key={index}>
              <Paragraph>
                <strong>{review.reviewerName}</strong> <br /> Email: (
                {review.reviewerEmail}): <br />
                <em>{review.comment}</em>
                <br />
                <small>
                  Rating: {review.rating} - Date:{" "}
                  {new Date(review.date).toLocaleDateString()}
                </small>
              </Paragraph>
            </div>
          ))}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

export default ProductDetail;
