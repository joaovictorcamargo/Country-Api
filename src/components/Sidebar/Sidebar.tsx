import React from "react";
import Drawer from "@material-ui/core/Drawer";
import { AiOutlineClose } from "react-icons/ai";

import "./sidebar.scss";

interface SidebarProps {
  onClick: Function;
  drawerState: boolean;
}

const Sidebar = (props: SidebarProps) => {
  const { onClick, drawerState } = props;

  const onDrawerClose = () => {
    onClick(!drawerState);
  };

  const switchPrimaryColor = (primary: string, primaryHover: string) => {
    document.documentElement.style.setProperty("--primary-color", primary);
    document.documentElement.style.setProperty(
      "--primary-color-hover",
      primaryHover
    );
  };

  return (
    <div className="sidebar">
      <Drawer
        anchor="right"
        open={drawerState}
        onClose={onDrawerClose}
        className="sidebar__drawer"
      >
        <div className="sidebar__drawer-content">
          <AiOutlineClose
            size="24"
            onClick={onDrawerClose}
            className="sidebar__close-menu"
          />

          <div className="sidebar__navigation">
            <h2>Themes</h2>
            <ul>
              <li
                className="cursor-pointer"
                onClick={() => switchPrimaryColor("#3D89E9", "#1F7AED")}
              >
                <h2>Blue</h2>
                <span className="sidebar__color-box blue"></span>
              </li>
              <li
                className="cursor-pointer"
                onClick={() => switchPrimaryColor("#23F0DC", "#18D4C2")}
              >
                <h2>Green</h2>
                <span className="sidebar__color-box green"></span>
              </li>
              <li
                className="cursor-pointer"
                onClick={() => switchPrimaryColor("#F1622F", "#EA4E16")}
              >
                <h2>Red</h2>
                <span className="sidebar__color-box red"></span>
              </li>
            </ul>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Sidebar;
