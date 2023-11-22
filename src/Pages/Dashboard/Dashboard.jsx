import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic, Table, Typography } from "antd";
import React from "react";
import {
  useGetSingleCartQuery,
  useGetAllCartsQuery,
} from "../../redux/services/cartApi";
import { Column } from "@ant-design/plots";
import { useEffect, useState } from "react";
import { useGetLimitedUsersQuery } from "../../redux/services/userApi";
import { useGetLimitedProductsQuery } from "../../redux/services/productApi";

const Dashboard = () => {
  const { data: order } = useGetSingleCartQuery();
  const { data: users } = useGetLimitedUsersQuery({
    limit: 10,
    skip: 0,
  });
  const { data: products } = useGetLimitedProductsQuery({
    limit: 10,
    skip: 0,
  });
  console.log(order);
  console.log(users);
  console.log(products);
  return (
    <>
      <Space size={21} direction="vertical">
        <Typography.Title level={7}>Dashboard</Typography.Title>
        <Space>
          <DashboardCard
            icon={
              <ShoppingCartOutlined
                style={{
                  color: "green",
                  backgroundColor: "rgba(0,255,0,0.25)",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={"Orders"}
            value={order?.total}
          />
          <DashboardCard
            icon={
              <ShoppingOutlined
                style={{
                  color: "blue",
                  backgroundColor: "rgba(0,0,255,0.25)",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={"Inventory"}
            value={products?.total}
          />
          <DashboardCard
            icon={
              <UserOutlined
                style={{
                  color: "purple",
                  backgroundColor: "rgba(128,0,128,0.25)",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={"Customer"}
            value={users?.total}
          />
          <DashboardCard
            icon={
              <DollarCircleOutlined
                style={{
                  color: "red",
                  backgroundColor: "rgba(255,0,0,0.15)",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={"Revenue"}
            value={order?.discountedTotal}
          />
        </Space>
        <Space>
          <RecentOrders />
          <ChartColumn />
        </Space>
      </Space>
    </>
  );
};

const DashboardCard = ({ title, value, icon }) => {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
};

const RecentOrders = () => {
  const { data, isLoading } = useGetSingleCartQuery();
  console.log(data); // You can keep the log if necessary for debugging.

  return (
    <>
      <Typography.Title level={2}>Recent Orders</Typography.Title>
      {data ? (
        <Table
          columns={[
            {
              title: "Title",
              dataIndex: "title",
            },
            {
              title: "Quantity",
              dataIndex: "quantity",
            },
            {
              title: "Price",
              dataIndex: "discountedPrice",
            },
          ]}
          dataSource={data.products}
          loading={isLoading}
          pagination={false}
        />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

const ChartColumn = () => {
  const { data, isFetching } = useGetAllCartsQuery();
  const [chartData, setChartData] = useState([]);
  const [chartLoading, setChartLoading] = useState(true);

  useEffect(() => {
    if (!isFetching) {
      const jsonData = data.carts.map((cart) => ({
        totalQuantity: cart.totalQuantity,
        discountedTotal: cart.discountedTotal,
      }));
      setChartData(jsonData);
      setChartLoading(false);
    }
  }, [data, isFetching]);
  console.log(chartData.length);
  const config = {
    data: chartData,
    xField: "discountedTotal",
    yField: "totalQuantity",
    xAxis: {
      label: {
        autoRotate: false,
      },
    },
    scrollbar: {
      type: "horizontal",
    },
  };

  return (
    <>
      {chartLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div style={{ width: "40vw" }}>
          {/* <Typography.Title level={2}>Revenue Chart </Typography.Title> */}
          <Column {...config} />
        </div>
      )}
    </>
  );
};

export default Dashboard;
