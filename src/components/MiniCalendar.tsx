"use client";

import React, { useState } from "react";
import moment from "moment";
import { Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const WeeklyCalendar = () => {
  const [currentWeek, setCurrentWeek] = useState(moment());
  const startOfWeek = currentWeek.clone().startOf("week");
  const days = [];

  const nextWeek = () => {
    setCurrentWeek(currentWeek.clone().add(7, "days"));
  };

  const prevWeek = () => {
    setCurrentWeek(currentWeek.clone().subtract(7, "days"));
  };

  for (let i = 0; i < 7; i++) {
    const date = startOfWeek.clone().add(i, "days");
    const isActive = date.isSame(moment(), "day");

    days.push(
      <div key={i} className="day text-center">
        <div className={`day-name text-gray-600 text-xs mb-3 pb-2 `}>
          {date.format("ddd")}
        </div>
        <div
          className={`date text-xs font-medium ${
            isActive ? "text-white rounded-full bg-blue-500 " : ""
          }`}
        >
          {date.format("D")}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center w-full mb-4">
        <div className="text-lg font-bold">
          {currentWeek.format("MMMM YYYY")}
        </div>
        <div className="items-center flex justify-center">
          <Button
            icon={<LeftOutlined style={{ fontSize: 10 }} />}
            className="p-1 rounded-full mx-2"
            onClick={prevWeek}
            disabled={currentWeek.isSame(moment(), "week")}
          ></Button>
          <Button
            onClick={nextWeek}
            icon={
              <RightOutlined
                className=" text-blue-500"
                style={{ fontSize: 10 }}
              />
            }
            className="p-1 rounded-full"
          ></Button>
        </div>
      </div>
      <div className="flex justify-between items-center">{days}</div>
    </div>
  );
};

export default WeeklyCalendar;
