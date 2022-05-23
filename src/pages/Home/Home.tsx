import React from "react";
import { useDispatch } from "react-redux";
/* import CountryList from '../../components/CountryList/CountryList' */
import AppBar from "../../components/Appbar/AppBar";
import { fetchAllCountries } from "../../redux/actions";

import "./home.scss";

const Home = () => {
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
      <AppBar />
    </div>
  );
};

export default Home;
