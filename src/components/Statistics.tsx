import { Avatar, Badge } from "antd";

const Statistics = () => {
  return (
    <div className="rounded-xl bg-[#8150f2]">
      <div className=" mx-auto flex md:flex-row flex-col items-center justify-between">
        <div className="px-4 py-5 mx-auto flex flex-row items-center">
          <Avatar src="/avatarone.jpg" size={45} className="mx-2" />
          <div className="flex-col items-center">
            <h4 className="text-white/60 text-xs p-1">Monthly Revenue</h4>
            <p className="text-white font-semibold text-lg ml-1">
              $3,500{" "}
              <span>
                <Badge color="green" count={"+2.4%"} />
              </span>
            </p>
            <p className="text-white/60 text-xs p-1">
              Previous Month <span className="text-white">$1.7k</span>
            </p>
          </div>
        </div>
        <div className="px-4 py-5 mx-auto flex flex-row items-center">
          <Avatar src="/avatarone.jpg" size={45} className="mx-2" />
          <div className="flex-col items-center">
            <h4 className="text-white/60 text-xs p-1">Monthly Sales</h4>
            <p className="text-white font-semibold text-lg ml-1">
              $6,750{" "}
              <span>
                <Badge color="green" count={"+4.3%"} />
              </span>
            </p>
            <p className="text-white/60 text-xs p-1">
              Previous Month <span className="text-white">$3.1k</span>
            </p>
          </div>
        </div>
        <div className="px-4 py-5 mx-auto flex flex-row items-center">
          <Avatar src="/avatarone.jpg" size={45} className="mx-2" />
          <div className="flex-col items-center">
            <h4 className="text-white/60 text-xs p-1">Total Profit</h4>
            <p className="text-white font-semibold text-lg ml-1">
              $10,900{" "}
              <span>
                <Badge color="green" count={"+4.3%"} />
              </span>
            </p>
            <p className="text-white/60 text-xs p-1">
              Previous Month <span className="text-white">$8.96k</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
