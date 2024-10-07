import React, { useState } from "react";
import logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import progrommingData from "../utils/progrommingList";
const SideBar = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const filteredData = progrommingData.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) // Case-insensitive search
  );
  return (
    <div className="Sidebar">
      <div className="top-logo">
        <img src={logo} alt="" />
        <h3 className="text-3xl font-bold ">DevPost</h3>
      </div>
      <div className="flex items-center search-container">
        <input
          type="text"
          className=" h-10 px-4 py-2 sidebar-search "
          placeholder="Quick search
        "
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} 
        />
        <span>
          <CiSearch />
        </span>
      </div>
      <ul className="language-list">
        {filteredData.map((items) => (
          <div className="flex items-center gap-2 mt-5">
            <span className="icon text-lg">
              <items.icon />
            </span>
            <span className="name">{items.name}</span>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
