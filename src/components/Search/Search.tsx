import React from "react";
import { Input } from "@material-ui/core";
import { AiOutlineSearch } from "react-icons/ai";
import "./search.scss";
function Search() {
  return (
    <div className="search-box">
      <div className="serach-box__wrapper">
        <Input placeholder="Pesquisar" disableUnderline />
        <AiOutlineSearch size={24} />
      </div>
    </div>
  );
}

export default Search;
