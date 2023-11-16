import React from "react";
import { Image, Pagination, Rate, Space, Table, Typography } from "antd";
import { useGetSingleCartQuery } from "../../redux/services/cartApi";

const Orders = () => {
  const { data, isLoading } = useGetSingleCartQuery();

  const products = data?.products || [];
  return (
    <>
      <Typography.Title>Orders</Typography.Title>
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
              title: "Price",
              dataIndex: "price",
              render: (price) => {
                return <span>${price}</span>;
              },
            },
            {
              title: "Discounted Price",
              dataIndex: "discountedPrice",
              render: (price) => {
                return <span>${price}</span>;
              },
            },
            {
              title: "Quantity",
              dataIndex: "quantity",
            },
            {
              title: "Total",
              dataIndex: "total",
            },
          ]}
          dataSource={products}
          pagination={false}
        ></Table>
      </Space>
    </>
  );
};

export default Orders;
