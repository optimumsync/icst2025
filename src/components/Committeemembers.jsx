import Profile from "../assets/profile.svg";
import React, { useState } from "react";

const CommitteeMembers = (props) => {
  const links = Object.keys(props.role).slice(1, props.role.length);
  const [activeLink, setActiveLink] = useState(links[0]);
  const [startIndex, setStartIndex] = useState(0);

  // Number of cards per page (2 rows * 3 cards for larger screens)
  const cardsPerPage = 6;

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
    <section className="bg-white py-6 px-4 md:py-10 md:px-20 lg:px-40 max-w-5xl mx-auto relative">
      <nav className="flex justify-center items-center space-x-4 md:space-x-6 py-4 border-b border-gray-200">
        {links.map((link) => (
          <button
            key={link}
            onClick={() => {
              setActiveLink(link);
              setStartIndex(0); // Reset carousel index when switching categories
            }}
            className={`relative text-gray-800 font-semibold text-sm md:text-base ${
              activeLink === link ? "text-black" : "text-gray-600"
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
              className={`absolute left-[-40px] top-1/2 transform -translate-y-1/2 bg-gogreen/80 hover:bg-gogreen text-white p-3 rounded-full ${
                startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              &#8592;
            </button>
            <button
              onClick={handleNext}
              disabled={startIndex + cardsPerPage >= props.role[activeLink].length}
              className={`absolute right-[-40px] top-1/2 transform -translate-y-1/2 bg-gogreen/80 hover:bg-gogreen text-white p-3 rounded-full ${
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
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8 py-8">
          {visibleMembers.map((member, index) => (
            <li
              key={index}
              className="bg-gogreen/80 shadow-md p-5 rounded-lg text-center"
            >
              <img src={Profile} alt="Profile" className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4" />
              <h4 className="text-base md:text-lg font-semibold text-white">
                {/* Add hyperlink to the name */}
                {/* <a href={member.link} target="_blank" rel="noopener noreferrer"> */}
                  {member.name}
                {/* </a> */}
              </h4>
              <p className="text-sm md:text-base text-white">{member.designation}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CommitteeMembers;
