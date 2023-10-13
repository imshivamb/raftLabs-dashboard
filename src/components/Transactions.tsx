import {
  AntDesignOutlined,
  CalendarOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, List, Select, Table, Tooltip } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: string;
  customer: { title: string }[];
  status: string;
  date: string;
  invoice: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Customer",
    dataIndex: "customer",

    key: "customer",

    width: 280,
    render: (customers) => (
      <List
        itemLayout="horizontal"
        dataSource={customers}
        renderItem={(item: any) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar size={35} src={`/avatarone.jpg`} />}
              title={
                <span className="text-[13px] font-bold line-clamp-1">
                  {item.title}
                </span>
              }
              description={
                <span className="text-xs line-clamp-1">
                  shivambhardwaj1503@gmail.com
                </span>
              }
            />
          </List.Item>
        )}
      />
    ),
  },

  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (text) => (
      <Badge
        status={text === "success" ? "success" : "warning"}
        text={text}
        className="rounded-full border-1  border-gray-300 shadow-md px-1 py-1"
      />
    ),
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Invoice",
    dataIndex: "invoice",
    key: "invoice",
  },
  {
    title: "People",
    dataIndex: "people",
    key: "people",
    render: () => (
      <Avatar.Group>
        <Avatar src="/avatarone.jpg" />
        <a href="https://google.com">
          <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
        </a>
        <Tooltip title="Ant User" placement="top">
          <Avatar
            style={{ backgroundColor: "#87d068" }}
            icon={<UserOutlined />}
          />
        </Tooltip>
        <Avatar
          style={{ backgroundColor: "#1677ff" }}
          icon={<AntDesignOutlined />}
        />
      </Avatar.Group>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    customer: [{ title: "Shivam Bhardwaj" }],
    status: "success",
    date: "Nov 02 2021",
    invoice: "$100.00",
  },
  {
    key: "2",
    customer: [{ title: "Phil Dunphy" }],
    status: "success",
    date: "Nov 02 2021",
    invoice: "$100.00",
  },
];

const Transactions: React.FC = () => {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-[28px] ">Transaction History</h2>
        <Select
          placeholder={
            <span style={{ fontSize: 14, color: "black" }}>
              <CalendarOutlined className="mr-3" />
              Month
            </span>
          }
          style={{ width: 110 }}
          options={[
            { value: "Oct", label: "Oct" },
            { value: "Nov", label: "Nov" },
            { value: "Decr", label: "Dec" },
          ]}
        />
      </div>
      <div className="flex items-start my-3">
        <Select
          bordered={false}
          placeholder={
            <span style={{ fontSize: 14, color: "black" }}>Recipient</span>
          }
          style={{
            width: 110,
            backgroundColor: "#f2f2f2",
            marginRight: 12,
            borderRadius: 6,
          }}
          options={[
            { value: "Oct", label: "Oct" },
            { value: "Nov", label: "Nov" },
            { value: "Decr", label: "Dec" },
          ]}
        />
        <Select
          bordered={false}
          placeholder={
            <span style={{ fontSize: 14, color: "black" }}>Amount</span>
          }
          style={{
            width: 110,
            backgroundColor: "#f2f2f2",
            marginRight: 12,
            borderRadius: 6,
          }}
          options={[
            { value: "Oct", label: "Oct" },
            { value: "Nov", label: "Nov" },
            { value: "Decr", label: "Dec" },
          ]}
        />
        <Select
          bordered={false}
          placeholder={
            <span style={{ fontSize: 14, color: "black" }}>Status</span>
          }
          style={{
            width: 110,
            backgroundColor: "#f2f2f2",
            marginRight: 12,
            borderRadius: 6,
          }}
          options={[
            { value: "Success", label: "Success" },
            { value: "Pending", label: "Pending" },
            { value: "Failed", label: "Failed" },
          ]}
        />
      </div>
      <div>
        <Table
          columns={columns}
          pagination={false}
          dataSource={data}
          scroll={{ x: true }}
        />
      </div>
    </div>
  );
};

export default Transactions;
