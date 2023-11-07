import { Typography } from "antd";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <Typography.Link href="tel:+987654321"> +987654321</Typography.Link>
      <Typography.Link href="https://www.google.com/" target={"_blank"}>
        Privacy Policy
      </Typography.Link>
      <Typography.Link href="https://www.google.com/" target={"_blank"}>
        Terms Of Use
      </Typography.Link>
    </div>
  );
};

export default Footer;
