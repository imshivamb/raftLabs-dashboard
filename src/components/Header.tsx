"use client";

import { BellOutlined, SearchOutlined } from "@ant-design/icons";
import {
  Avatar,
  Badge,
  Button,
  Col,
  Popover,
  Progress,
  Input,
  Row,
  Select,
  Divider,
} from "antd";
const { Option } = Select;

import React, { useState } from "react";

const Header: React.FC = () => {
  const [searchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  const content = (
    <div>
      <Input placeholder="Search..." />
    </div>
  );
  return (
    <header className=" mt-4 ml-6 w-full ">
      <Row>
        <Col span={17} className="hidden lg:block">
          <div className="flex items-center justify-between mr-0">
            <div className="flex items-start">
              <Badge count={3} color="blue" offset={[-7, 7]}>
                <div className="relative">
                  <Progress type="circle" percent={25} size={70} />
                  <Avatar
                    size={60}
                    src="/avatarone.jpg"
                    className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
              </Badge>
              <div className=" flex-col ml-8">
                <h1 className="text-3xl font-bold mb-1">Good Evening Team!</h1>
                <p className="text-xs font-medium text-gray-400 mt-0">
                  Have an in-depth look at all the metrics within your dashboard
                </p>
              </div>
            </div>
            <Popover
              placement="left"
              content={content}
              trigger="click"
              visible={searchVisible}
              onVisibleChange={toggleSearch}
            >
              <Button
                className="bg-gray-100 text-gray-600"
                shape="circle"
                icon={<SearchOutlined />}
              />
            </Popover>
          </div>
        </Col>
        <Col span={7} className=" flex items-center ">
          <Badge dot offset={[-3, 4]} status="processing" size="default">
            <BellOutlined className="text-gray-500 text-lg ml-8 cursor-pointer hover:scale-110" />
          </Badge>
          <Select className=" shadow-sm ml-28 rounded-xl" defaultValue="Shivam">
            <Option value="Shivam">
              <Avatar
                src="/avatarone.jpg"
                size="small"
                style={{ marginRight: "8px" }}
              />
              Shivam
            </Option>
            <Option value="Jack">
              <Avatar
                src="/avatarone.jpg"
                size="small"
                style={{ marginRight: "8px" }}
              />
              Jack
            </Option>
            <Option value="Lucy">
              <Avatar
                src="/avatarone.jpg"
                size="small"
                style={{ marginRight: "8px" }}
              />
              Lucy
            </Option>
          </Select>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
