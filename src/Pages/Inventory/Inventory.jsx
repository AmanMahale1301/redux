import { Image, Pagination, Rate, Space, Table, Typography } from "antd";
import React, { useState, useEffect } from "react";
import { useGetLimitedProductsQuery } from "../../redux/services/productApi";

const Inventory = () => {
  const [currentLimit, setCurrentLimit] = useState(10); // Set the default limit
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSkip, setCurrentSkip] = useState(0);

  const { data, refetch, isLoading } = useGetLimitedProductsQuery({
    limit: currentLimit,
    skip: currentSkip,
  });

  const products = data?.products || [];
  const totalProducts = data?.total || 0;

  useEffect(() => {
    refetch({ limit: currentLimit, skip: currentSkip });
  }, [currentLimit, currentSkip]);

  const handlePageChange = (page, pageSize) => {
    const newLimit = pageSize;
    const newSkip = (page - 1) * newLimit;
    setCurrentLimit(newLimit);
    setCurrentSkip(newSkip);
    setCurrentPage(page);
  };

  const onShowSizeChange = (pageSize) => {
    setCurrentLimit(pageSize); // Update the limit when it changes
  };
  return (
    <>
      <Typography.Title>Inventory</Typography.Title>
      <Space size={10} direction="vertical" align="center">
        <Table
          loading={isLoading}
          bordered
          columns={[
            {
              title: "Title",
              dataIndex: "title",
            },
            {
              title: "Thumbnail",
              dataIndex: "thumbnail",
              render: (link) => {
                return <Image src={link} width={40} />;
              },
            },
            {
              title: "Price",
              dataIndex: "price",
              render: (price) => {
                return <span>${price}</span>;
              },
            },
            {
              title: "Rating",
              dataIndex: "rating",
              render: (rating) => {
                return <Rate value={rating} allowHalf disabled />;
              },
            },
            {
              title: "Stock",
              dataIndex: "stock",
            },
            {
              title: "Brand",
              dataIndex: "brand",
            },
            {
              title: "Category",
              dataIndex: "category",
            },
          ]}
          dataSource={products}
          pagination={false}
        ></Table>
        <div className="" style={{ marginBottom: "10px" }}>
          <Pagination
            current={currentPage}
            total={totalProducts}
            showSizeChanger
            onShowSizeChange={onShowSizeChange}
            onChange={handlePageChange}
          />
        </div>
      </Space>
    </>
  );
};

export default Inventory;
