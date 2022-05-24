import React, { useState } from "react";
import { useDispatch } from "react-redux";
import AppBar from "../../components/Appbar/AppBar";
import { fetchAllCountries } from "../../redux/actions";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./home.scss";
import CountryList from "../../components/CountryList/CountryList";

const Home = () => {
  const [drawerState, setDrawerState] = useState(false);

  const handleDrawerState = (state: boolean) => {
    setDrawerState(state);
  };

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchAllCountries());
  }, [dispatch]);

  return (
    <div className="home">
      <AppBar drawerState={drawerState} onClick={handleDrawerState} />
      <Sidebar drawerState={drawerState} onClick={handleDrawerState} />
      <CountryList />
    </div>
  );
};

export default Home;
