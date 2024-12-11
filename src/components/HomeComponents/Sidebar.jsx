import React from "react";
import logo from "../../assets/logo.png";
import programmingData from "../../utils/progrommingList";

import { useState, useEffect } from "react";
const Sidebar = ({ isOpen, onClick }) => {
  const [searchQuery, setSearchquery] = useState("");
  const filteredLanguages = programmingData.filter((language) =>
    language.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleSearchlanguage = (e) => {
    setSearchquery(e.target.value);
  };

  return (
    <div
      className={`bg-white text-black transition-all duration-300 shadow-lg h-screen absolute md:relative  ${
        isOpen ? "w-72" : "w-0"
      }`}
    >
      <div className={`p-4 flex items-center justify-between gap-1 ${isOpen ? "" : "hidden"}`}>
        <div className="flex items-center">
          <img src={logo} alt="" />
          <h3 className="font-bold text-2xl text-blue-600">DevPost</h3>
        </div>
        <i class="bi bi-x text-2xl block md:hidden" onClick={onClick}></i>
      </div>

      <div className="px-3">
        {isOpen && (
          <div>
            <input
              type="text"
              value={searchQuery}
              className="px-3 py-2 border border-input rounded-md w-64"
              placeholder="Search Language"
              onChange={handleSearchlanguage}
            />
            <ul
              style={{ overflow: "auto", height: "250px" }}
              className="mt-4 overflow-y-scroll scrollbar-none"
            >
              {filteredLanguages.map((data, language) => (
                <div
                  key={data.id}
                  onClick={() => handleLanguageClick(language)}
                  className="p-3 flex items-center gap-6 hover:bg-hover rounded-md cursor-pointer"
                >
                  {" "}
                  <span className="" style={{ color: data.color }}>
                    <i className={`bi ${data.icon}`} />
                  </span>
                  <span>{data.name}</span>
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
