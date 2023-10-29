import React, { useEffect } from "react";
import { getUserDetail } from "../../services/userDetail.service";
import { Table } from "antd";
const ShowUsersDataToAdmin = () => {
  const [users, setUsers] = React.useState([]);
  useEffect(() => {
    getUserDetail()
      .then((res) => {
        setUsers(res.user);
      })
      .catch((err) => {
        console.log(err, "error in get user detail method");
      });
  }, []);

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
  ];

  return <div>{users && <Table dataSource={users} columns={columns} />}</div>;
};

export default ShowUsersDataToAdmin;
