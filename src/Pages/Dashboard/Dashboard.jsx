import { ShoppingCartOutlined } from "@ant-design/icons";
import { Card, Space, Statistic, Typography } from "antd";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <Typography.Title level={7}>Dashboard</Typography.Title>
      <Space direction="horizontal">
        <DashboardCard title={"Orders"} value={12345} />
      </Space>
    </div>
  );
};

const DashboardCard = (title, value) => {
  return (
    <Card>
      <Space direction="horizontal">
        <ShoppingCartOutlined style={{ fontSize: 32, paddingRight: "20px" }} />
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
};
export default Dashboard;
