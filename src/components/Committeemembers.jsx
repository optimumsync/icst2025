import Profile from "../assets/profile.svg";
// import HorizontalScrollCards from "./Horizontal";
import React, { useState } from "react";

const CommitteeMembers = (props) => {
  const links = Object.keys(props.role).slice(1, props.role.length);
  const [activeLink, setActiveLink] = useState(links[0]);
  const [startIndex, setStartIndex] = useState(0);

  // Number of cards per page (2 rows * 3 cards)
  const cardsPerPage = 4;

  // Handle navigation for the carousel
  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - cardsPerPage, 0));
  };

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + cardsPerPage, props.role[activeLink].length - cardsPerPage)
    );
  };

  const visibleMembers = props.role[activeLink].slice(startIndex, startIndex + cardsPerPage);

  return (
    <section className="bg-white py-5 px-40 max-w-5xl mx-auto relative">
      <nav className="flex justify-center flex-wrap items-center py-4 border-b border-gray-200">
        {links.map((link) => (
          <button
            key={link}
            onClick={() => {
              setActiveLink(link);
              setStartIndex(0); // Reset carousel index when switching categories
            }}
            className={`ml-4 mr-4 relative text-gray-800 font-semibold ${
              activeLink === link ? "text-black" : "text-gray-800"
            }`}
          >
            {link}
            {activeLink === link && (
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-orange-400"></span>
            )}
          </button>
        ))}
      </nav>
      
      <div className="relative">
        {/* Navigation Buttons Outside the Grid */}
        {props.role[activeLink].length > cardsPerPage && (
          <>
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className={`absolute left-[60px] sm:left-[10px] top-1/2 transform -translate-y-1/2 bg-gogreen/80 hover:bg-gogreen text-white p-3 rounded-full ${
                startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              &#8592;
            </button>
            <button
              onClick={handleNext}
              disabled={startIndex + cardsPerPage >= props.role[activeLink].length}
              className={`absolute right-[60px] sm:right-[10px] top-1/2 transform -translate-y-1/2 bg-gogreen/80 hover:bg-gogreen text-white p-3 rounded-full ${
                startIndex + cardsPerPage >= props.role[activeLink].length
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              &#8594;
            </button>
          </>
        )}
  
        {/* Cards Grid */}
        <ul className="flex justify-center flex-wrap gap-x-12 gap-y-12 py-5">
          {visibleMembers.map((member, index) => (
            <li
              key={index}
              className="basis-1/3 bg-gogreen/80 shadow-md p-5 rounded-lg text-center"
            >
              <img src={Profile} alt="Profile" className="w-20 h-20 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white">
                {/* Add hyperlink to the name */}
                {/* <a href={member.link} target="_blank" rel="noopener noreferrer"> */}
                  {member.name}
                {/* </a> */}
              </h4>
              <p className="text-white">{member.designation}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}


export default CommitteeMembers;
