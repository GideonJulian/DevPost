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
      className={`bg-sidebar-bg text-black transition-all duration-300 z-10  h-screen absolute md:relative ${
        isOpen ? "w-72" : "w-0"
      }`}
    >
      <div
        className={`p-4 pb-10 flex items-center justify-between gap-1 ${
          isOpen ? "" : "hidden"
        }`}
      >
        <div className="flex items-center">
          <img src={logo} alt="" />
          <h3 className="font-bold text-2xl text-logo-color">DevPost</h3>
        </div>
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
            <div className="px-3 py-1 bg-background rounded-md text-white font-semibold mt-4">
              Languages
            </div>
            <ul
              style={{ overflow: "auto", height: "250px" }}
              className="mt-4 overflow-y-scroll scrollbar-none ml-6"
            >
              {filteredLanguages.map((data, language) => (
                <div
                  key={data.id}
                  onClick={() => handleLanguageClick(language)}
                  className="p-3 flex items-center gap-6 hover:bg-dark rounded-md cursor-pointer"
                >
                  {" "}
                  <span className="" style={{ color: data.color }}>
                    <i className={`bi ${data.icon}`} />
                  </span>
                  <span className="text-light-grey font-semibold">
                    {data.name}
                  </span>
                </div>
              ))}
            </ul>
            {/* Buttons moved to the bottom */}
            <div className="mt-7">
              <button className="px-6 py-3 flex items-center font-semibold bg-logo-color text-white rounded-lg w-full">
                <i class="bi bi-plus"></i>
                Add a post
              </button>
              <button className="px-6 py-2 mt-2 w-full bg-dark text-white font-semibold font-sans rounded-lg ">
                Sign in or Create an Account
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
