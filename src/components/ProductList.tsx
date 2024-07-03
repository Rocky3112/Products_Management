import { useState } from "react";
import { Table, Button, Pagination } from "antd";
import { useGetProductsQuery } from "../api/productsApi";
import { useNavigate } from "react-router-dom";
import "../styles/customStyles.css";

const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const { data, error, isLoading } = useGetProductsQuery({
    limit: pageSize,
    skip: (currentPage - 1) * pageSize,
  });
  const navigate = useNavigate();

  const columns = [
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Price", dataIndex: "price", key: "price" },
    { title: "Category", dataIndex: "category", key: "category" },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <Button onClick={() => navigate(`/product/${record.id}`)}>
          View Details
        </Button>
      ),
    },
  ];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div>
      <Table
        className="list"
        columns={columns}
        dataSource={data?.products}
        pagination={false}
        rowKey="id"
      />
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={data?.total}
        onChange={(page, pageSize) => {
          setCurrentPage(page);
          setPageSize(pageSize);
        }}
      />
    </div>
  );
};

export default ProductList;
