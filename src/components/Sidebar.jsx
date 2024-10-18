import React, { useState } from "react";
import { FaTags } from "react-icons/fa6";
import programmingData from "../utils/progrommingList";
import { BsFillBookmarkStarFill } from "react-icons/bs";
const Sidebar = () => {
  const [searchQuery, setSearchquery] = useState("");
  const handleSearchlanguage = (e) => {
    setSearchquery(e.target.value);
  };
  const filteredLanguages = programmingData.filter((language) =>
    language.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div  className='sidebar-container' style={{
      overflowX: 'auto'
    }}>
      <div className="container">
        {" "}
        <div className="mt-3 px-3 py-2 h-10 bg-gray w-full flex items-center gap-2 saved-sol-btn">
          <h3 className="font-medium">Popular languages</h3>
          <span className="text-main-blue">
            <FaTags />
          </span>
        </div>
        <div className="side-search">
          <input
            value={searchQuery}
            type="text"
            className=" px-3 py-2 h-10 border rounded rounded-lg mt-4"
            placeholder="Search "
            onChange={handleSearchlanguage}
          />
        </div>
        <ul
          className="ml-2 mt-5 language-list px-5"
          style={{
            height: "350px",
            overflowY: "auto",
          }}
        >
          {filteredLanguages.map((items) => {
            return (
              <div className="flex items-center gap-2 cursor-pointer mt-2 px-2 py-3 ">
                <span>
                  <items.icon />
                </span>
                <span>{items.name}</span>
              </div>
            );
          })}
        </ul>
        <div className="saved-solution ">
          <div className="mt-3 px-3 py-2 h-10 bg-gray w-full flex items-center gap-2 saved-sol-btn">
            <span className="font-medium ">Saved solution</span>
            <span className="text-main-blue text-lg text-bold ">
              <BsFillBookmarkStarFill />
            </span>
          </div>
          <ul>
            <p className="text-sm font-medium font-italic">You need to register to access your saved solutions.</p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
