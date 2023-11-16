import { Badge, Image, Space, Typography } from "antd";
import React from "react";
import {
  MailOutlined,
  BellFilled,
  ZoomOutOutlined,
  ZoomInOutlined,
  UserOutlined,
} from "@ant-design/icons";
import logo from "../../assets/redux.svg";
const Header = () => {
  return (
    <div className="header">
      <Image
        width={40}
        src={logo}
        className="image"
        preview={{
          toolbarRender: (
            _,
            { transform: { scale }, actions: { onZoomOut, onZoomIn } }
          ) => (
            <Space size={12} className="toolbar-wrapper">
              <ZoomOutOutlined disabled={scale === 1} onClick={onZoomOut} />
              <ZoomInOutlined disabled={scale === 50} onClick={onZoomIn} />
            </Space>
          ),
        }}
      />
      <Typography.Title>Redux Learning </Typography.Title>
      <Space>
        <UserOutlined style={{ fontSize: 24 }} />
        {/* <Badge dot={2}>
          <MailOutlined style={{ fontSize: 24 }} />
        </Badge>
        <Badge dot={20}>
          <BellFilled style={{ fontSize: 24 }} />
        </Badge> */}
      </Space>
    </div>
  );
};

export default Header;
