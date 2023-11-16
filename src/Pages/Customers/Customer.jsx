import React, { useEffect, useState } from "react";
import { Image, Pagination, Space, Table, Typography } from "antd";
import { useGetLimitedUsersQuery } from "../../redux/services/userApi";

const Customer = () => {
  const [currentLimit, setCurrentLimit] = useState(10); // Set the default limit
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSkip, setCurrentSkip] = useState(0);

  const { data, isLoading, refetch } = useGetLimitedUsersQuery({
    limit: currentLimit,
    skip: currentSkip,
  });

  const users = data?.users || [];
  const totalUsers = data?.total || 0;

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
      <Typography.Title>Customers</Typography.Title>
      <Space size={10} direction="vertical" align="center">
        <Table
          loading={isLoading}
          bordered
          columns={[
            {
              title: "Photo",
              dataIndex: "image",
              render: (link) => {
                return <Image src={link} width={40} />;
              },
            },
            {
              title: "First Name",
              dataIndex: "firstName",
            },
            {
              title: "Last Name",
              dataIndex: "lastName",
            },
            {
              title: "Email",
              dataIndex: "email",
            },
            {
              title: "Phone",
              dataIndex: "phone",
            },
            {
              title: "Address",
              dataIndex: "address",
              render: (address) => {
                return (
                  <span>
                    {address.address},{address.city}
                  </span>
                );
              },
            },
          ]}
          dataSource={users}
          pagination={false}
        ></Table>

        <div className="" style={{ marginBottom: "10px" }}>
          <Pagination
            current={currentPage}
            total={totalUsers}
            showSizeChanger
            onShowSizeChange={onShowSizeChange}
            onChange={handlePageChange}
          />
        </div>
      </Space>
    </>
  );
};

export default Customer;
