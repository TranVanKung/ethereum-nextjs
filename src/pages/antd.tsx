import { useContext } from "react";
import { Table, Button } from "antd";
import { Context } from "@/component";

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

const Home = () => {
  const { onToggleTheme } = useContext(Context);

  return (
    <div style={{ padding: "100px" }}>
      <Button type="primary" onClick={onToggleTheme}>
        Toggle
      </Button>

      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default Home;
