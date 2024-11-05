import React, { useState } from "react";
import { FaTags } from "react-icons/fa6";
import programmingData from "../utils/progrommingList";
import { Link } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { BsGear } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa6";
import { CiFlag1 } from "react-icons/ci";
const Sidebar = () => {
  const [searchQuery, setSearchquery] = useState("");
  const handleSearchlanguage = (e) => {
    setSearchquery(e.target.value);
  };
  const filteredLanguages = programmingData.filter((language) =>
    language.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div
      className="sidebar  md:w-64 h-screen flex flex-col text-white fixed top-24 bg-grey-blue px-2"
      style={{
        width: "260px",
      }}
    >
      <div
        className="container px-2"
        style={{
          overflowY: "auto",
        }}
      >
        <div className="links  border-b pb-6 flex flex-col gap-2">
          <Link className="flex items-center px-3 py-3 space-x-6 bg-hover rounded-md text-white font-semibold text-sm">
            <span className="text-white font-semibold text-2xl">
              <GoHomeFill />
            </span>
            <span>Home</span>
          </Link>
          <Link className="flex items-center px-3 py-3 space-x-6 hover:bg-hover rounded-md text-white font-semibold text-sm">
            <span className="text-white font-semibold text-2xl ">
              <FaBookmark />
            </span>
            <span>Saved</span>
          </Link>
        </div>
        <div className="mt-3 border-b">
          <h3 className="font-semibold">Popular language</h3>
          <div className="side-search">
            <input
              value={searchQuery}
              type="text"
              className=" px-3 py-2 h-10 border rounded rounded-lg mt-4 bg-hover"
              placeholder="Search "
              onChange={handleSearchlanguage}
            />
          </div>
          <ul
            style={{ overflow: "auto", height: "250px" }}
            className="mt-4 overflow-y-scroll scrollbar scrollbar-track-transparent scrollbar-thumb-transparent  scrollbar-hidden"
          >
            {filteredLanguages.map((data) => (
              <div
                key={data.id}
                className="p-3 flex items-center gap-6 hover:bg-hover rounded-md cursor-pointer"
              >
                <span className="text-lg">
                  <data.icon />
                </span>
                <span>{data.name}</span>
              </div>
            ))}
          </ul>
        </div>
        <div className="mt-3 border-b pb-3">
          <div className="p-3 flex items-center gap-6 hover:bg-hover rounded-md cursor-pointer">
            <span className="text-lg">
              <BsGear />
            </span>
            <span>Settings</span>
          </div>
          <div className="p-3 flex items-center gap-6 hover:bg-hover rounded-md cursor-pointer">
            <span className="text-lg">
              <CiFlag1 />
            </span>
            <span>Privacy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
