import { ClockCircleOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Avatar, List } from "antd";
import React from "react";

const data = [
  {
    title: "Meeting with client",
    time: "1 pm",
  },
  {
    title: "Weekly Report",
    time: "3 pm",
  },
  {
    title: "Daily Scrum Meeting",
    time: "6pm",
  },
];

const Tasks = () => {
  return (
    <div className="flex flex-col mx-auto items-start justify-between  mt-6">
      <div className="w-full ">
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item: any) => (
            <List.Item className="flex items-center justify-between my-4">
              <List.Item.Meta
                avatar={<Avatar size={45} src={`/laptop.jpg`} />}
                title={
                  <span className="text-[13px] font-bold">{item.title}</span>
                }
                description={
                  <div className="text-xs flex justify-between ">
                    <p>
                      <VideoCameraOutlined className="mr-1" />
                      Google Meet{" "}
                    </p>
                    <span className="ml-8">
                      <ClockCircleOutlined className="mr-1" />
                      {item.time}
                    </span>
                  </div>
                }
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default Tasks;
