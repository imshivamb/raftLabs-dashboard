import { Badge } from "antd";
import React from "react";
import BarGraph from "./Graph";

const Data = () => {
  return (
    <div className="border-2 rounded-xl border-gray-100 shadow-sm">
      <div className="flex mx-auto flex-col md:flex-row my-auto items-center justify-between p-2 ">
        <div className="flex-col justify-between mx-5 my-3 md:my-0">
          <div className="pb-5">
            <h3 className="font-semibold text-lg ">Total Sales & Cost</h3>
            <p className="text-xs text-gray-600">Last 60 days</p>
          </div>
          <p className="text-4xl py-2 text-[#8150f2] font-bold">
            $956.82k{" "}
            <span>
              <Badge color="green" count={"+5.4%"} />
            </span>
          </p>
          <p className="text-gray-600 text-xs">
            <span className="text-green-600">+8.2k</span> vs prev. 60 days
          </p>
        </div>
        <div className=" my-3 mx-4 md:my-0">
          <BarGraph />
        </div>
      </div>
    </div>
  );
};

export default Data;
