"use client";

import {
  AntDesignOutlined,
  ArrowRightOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Col, Divider, Row, Select, Tooltip } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import Data from "./Data";
import Statistics from "./Statistics";
import Transactions from "./Transactions";
import Tasks from "./Tasks";
import WeeklyCalendar from "./MiniCalendar";

const Main = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <section className="px-4 lg:px-8 py-6 mx-auto flex-wrap">
      <Row className="flex flex-col md:flex-row">
        <Col span={17} md={17}>
          <Statistics />
          <div className="my-8">
            <Data />
          </div>
          <div>
            <Transactions />
          </div>
        </Col>
        <Col span={17} md={7}>
          <div className="ml-8 mr-2 mt-4 md:mt-0 px-2 flex-col items-start justify-between pb-2">
            <Link
              href="/premium"
              target="_blank"
              className="text-blue-600 text-xs mb-2 "
            >
              Premium Access
            </Link>
            <p className="text-[32px] leading-tight mt-2 font-bold">
              Take Back Your Creative Control
              <span className="">
                <Avatar.Group maxCount={3} maxPopoverTrigger="click">
                  <Avatar src="/avatarone.jpg" />
                  <Link href="/">
                    <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
                  </Link>
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
              </span>
            </p>
            <Select
              className="-ml-2"
              placeholder="The Professional Platform"
              bordered={false}
            />
            <Button className=" flex items-center w-[250px] py-4 text-[13px] justify-between border-gray-200 text-blue-700 my-3">
              Upgrade now <ArrowRightOutlined />
            </Button>
            <Divider />
            <div className="my-10">
              <WeeklyCalendar />
            </div>

            <Divider />
            <Tasks />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Main;
