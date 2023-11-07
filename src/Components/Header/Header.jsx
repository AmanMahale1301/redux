import { Badge, Image, Space, Typography } from "antd";
import React from "react";
import { MailOutlined, BellFilled } from "@ant-design/icons";
import logo from "../../assets/redux.svg";
const Header = () => {
  return (
    <div className="header">
      <Image width={40} src={logo} />
      <Typography.Title>Redux Learning </Typography.Title>
      <Space>
        <Badge dot={2}>
          <MailOutlined style={{ fontSize: 24 }} />
        </Badge>
        <Badge dot={20}>
          <BellFilled style={{ fontSize: 24 }} />
        </Badge>
      </Space>
    </div>
  );
};

export default Header;
