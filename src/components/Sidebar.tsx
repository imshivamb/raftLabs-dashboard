"use client";

import {
  AreaChartOutlined,
  CloseOutlined,
  CompassOutlined,
  FolderOutlined,
  HomeOutlined,
  MenuOutlined,
  MessageOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Drawer, Menu } from "antd";
import Image from "next/image";
import { useState } from "react";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Home", "1", <HomeOutlined />),
  getItem("Analytics", "2", <AreaChartOutlined />),
  getItem("Explore", "3", <CompassOutlined />),
  getItem("Shop", "4", <ShopOutlined />),
  getItem("Inbox", "5", <MessageOutlined />),
  getItem(
    "Tools",
    "g1",
    null,
    [
      getItem("Settings", "6", <SettingOutlined />),
      getItem("Help", "7", <QuestionCircleOutlined />),
    ],
    "group"
  ),
  getItem(
    "Projects",
    "g2",
    null,
    [
      getItem("Amazon", "8", <FolderOutlined />),
      getItem("Invinity HQ", "9", <FolderOutlined />),
    ],
    "group"
  ),
];
const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="lg:flex flex-col hidden items-start justify-start">
        <div className="ml-4 my-4">
          <div className="flex flex-row items-center">
            {/* Logo */}

            <Image src="/logo.png" alt="Logo" width={60} height={60} />
            <p className="font-bold text-2xl">Omoi</p>
          </div>
          <div className="mt-5">
            <Menu
              style={{
                width: 210,
                paddingRight: 16,
                fontFamily: "inherit",
                borderRight: 2,
                borderColor: "gray",
              }}
              defaultSelectedKeys={["1"]}
              items={items}
              mode="inline"
              className="custom-menu"
            />
          </div>
        </div>
      </div>
      <div className="lg:hidden block h-0  mt-4 ml-4 ">
        <Button onClick={showDrawer} className="border-none text-2xl">
          <MenuOutlined />
        </Button>
        <Drawer
          closable={false}
          placement="left"
          open={open}
          width={240}
          title={
            <div className="flex flex-row items-center">
              {/* Logo */}

              <Image src="/logo.png" alt="Logo" width={60} height={60} />
              <p className="font-bold text-2xl">Omoi</p>
              <CloseOutlined className="ml-auto" onClick={onClose} />
            </div>
          }
        >
          <Menu
            style={{
              width: 210,
              paddingRight: 16,
              fontFamily: "inherit",
              borderRight: 2,
              borderColor: "gray",
            }}
            defaultSelectedKeys={["1"]}
            items={items}
            mode="inline"
            className="custom-menu"
          />
        </Drawer>
      </div>
    </>
  );
};

export default Sidebar;
