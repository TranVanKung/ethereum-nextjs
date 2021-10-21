import { useContext } from "react";
import { Table, Button, DatePicker, Select } from "antd";
import { Context } from "@/component";

const { Option } = Select;

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
      <div style={{ marginBottom: "1rem" }}>
        <DatePicker />

        <Select defaultValue="lucy" style={{ width: 120 }}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>

        <Button type="primary" onClick={onToggleTheme}>
          Toggle
        </Button>
      </div>

      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default Home;
