import React, { useEffect } from "react";
import { getUserDetail } from "../../services/userDetail.service";
import { Popconfirm, Table } from "antd";
import { deleteUserDetail } from "../../services/userDetail.service";
const ShowUsersDataToAdmin = () => {
  const [users, setUsers] = React.useState([]);
  const [dataSource, setDataSource] = React.useState([]);
  const handleDelete = async (key: React.Key) => {
    const resp = await deleteUserDetail(key);
    if (resp) setDataSource(resp);
  };
  useEffect(() => {
    getUserDetail()
      .then((res) => {
        setUsers(res.user);
      })
      .catch((err) => {
        console.log(err, "error in get user detail method");
      });
  }, [dataSource]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "operation",
      dataIndex: "operation",
      render: (_: any, record: any) =>
        users.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record._id)}
          >
            <a>Delete</a>
          </Popconfirm>
        ) : null,
    },
  ];

  return <div>{users && <Table dataSource={users} columns={columns} />}</div>;
};

export default ShowUsersDataToAdmin;
