import React from "react";
import { useSelector } from "react-redux";

import { AppState } from "../../types";
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

  /*   const cart = useSelector((state: AppState) => state.cartReducer.cart); */

  const onDrawerClick = () => {
    onClick(!drawerState);
  };

  //cart menu open related state and functions

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);

  const handleCartMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCartMenuClose = () => {
    setAnchorEl(null);
  };

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
          {/*  <CartMenu
            cart={cart}
            onClick={handleCartMenuClose}
            menuOpen={menuOpen}
            anchorEl={anchorEl}
          /> */}

          <div className="appbar__content-cart" onClick={handleCartMenuClick}>
            <FaShoppingCart size={24} className="cursor-pointer" />

            {/*  <div
              className={`appbar__content-cart-counter cursor-pointer ${
                cart.length > 0 ? "active" : ""
              }`}
            >
              {cart && cart.length}
            </div> */}
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
