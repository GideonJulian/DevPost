import React, { useState } from "react";
import logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import progrommingData from "../utils/progrommingList";
import { FaTimes } from "react-icons/fa";
const SideBar = ({ closeSidebar }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredData = progrommingData.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="">
      <div className="top-logo">

          <img src={logo} alt="" />
          <h3 className="text-3xl font-bold ">DevPost</h3>
  
        <span className="close-sidebar" onClick={closeSidebar}>
          <FaTimes />
        </span>
      </div>
      <div></div>
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
      <ul
        className="language-list"
        style={{
          overflowY: "auto",
          height: '450px'
        }}
      >
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
