import React, { useState } from "react";
import { useDispatch } from "react-redux";
/* import CountryList from '../../components/CountryList/CountryList' */
import AppBar from "../../components/Appbar/AppBar";
import { fetchAllCountries } from "../../redux/actions";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./home.scss";
import CountryCard from "../../components/CountryCard/CountryCard";

const Home = () => {
  const [drawerState, setDrawerState] = useState(false);

  const handleDrawerState = (state: boolean) => {
    setDrawerState(state);
  };

  //initialize dispatch
  const dispatch = useDispatch();

  //dispatch fetchAllCountries when page loads
  React.useEffect(() => {
    dispatch(fetchAllCountries());
  }, [dispatch]);

  return (
    <div className="home">
      {/* Inner contents country list/result */}
      {/*  <CountryList/> */}
      <AppBar drawerState={drawerState} onClick={handleDrawerState} />
      <Sidebar drawerState={drawerState} onClick={handleDrawerState} />

      <div className="home__contents"></div>
    </div>
  );
};

export default Home;
