import React from "react";

import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

import "./appbar.scss";
import Search from "../Search/Search";

interface AppbarProps {
  onClick: Function;
  drawerState: boolean;
}

const Appbar = (props: AppbarProps) => {
  const { onClick, drawerState } = props;

  const onDrawerClick = () => {
    onClick(!drawerState);
  };

  const handleCartMenuClick = (event: React.MouseEvent<HTMLElement>) => {};

  return (
    <div className="appbar">
      <div className="appbar__content container">
        <div className="appbar__content-left">
          <h2>COUNTRY APP</h2>
        </div>

        <div className="appbar__content-search">
          <Search />
        </div>

        <div className="appbar__content-right">
          <div className="appbar__content-cart" onClick={handleCartMenuClick}>
            <FaShoppingCart size={24} className="cursor-pointer" />
          </div>

          <AiOutlineMenu
            size={24}
            className="cursor-pointer"
            onClick={onDrawerClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Appbar;
