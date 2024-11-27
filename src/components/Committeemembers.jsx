import Profile from "../assets/profile.svg";
import React, { useState } from "react";

const CommitteeMembers = (props) => {

    const links = Object.keys(props.role).slice(1, props.role.length)
    const [activeLink, setActiveLink] = useState(links[0]);

    return (
    <section className="bg-white py-10 px-40">
      {/* <h2 className="text-2xl font-bold text-center text-blue-900 mb-8">{title}</h2> */}
      <nav className="flex justify-center items-center space-x-6 py-4 border-b border-gray-200">
        {links.map((link) => (
          <button
            key={link}
            onClick={() => setActiveLink(link)}
            className={`relative text-gray-800 font-semibold ${
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
      <ul className="flex justify-center items-center flex-wrap gap-12 py-10 px-40">
        {props.role[activeLink].map((member, index) => (
          <li
            key={index}
            className="basis-1/4 bg-gray-50 shadow-md p-5 rounded-lg text-center"
          >
            <img src={Profile} alt="Profile" />
            <h4 className="text-lg font-semibold text-gray-800">{member.name}</h4>
            <p className="text-gray-600">{member.designation}</p>
          </li>
        ))}
      </ul>
    </section>
    )
};

// const ChiefPatron = ({title, members}) => {
//   return (
//       <section className="bg-white py-10 px-40">
//         {/* <h2 className="text-2xl font-bold text-center text-blue-900 mb-8">{title}</h2> */}
//         {/* <Navbar key={title} links={links}/> */}
//         <ul className="grid grid-cols-1 sm:grid-cols-2 gap-20 py-10 px-80">
//           {members.map((member, index) => (
//             <li
//               key={index}
//               className="bg-gray-50 shadow-md p-7 rounded-lg text-center"
//             >
//               <h4 className="text-lg font-semibold text-gray-800">{member.name}</h4>
//               <p className="text-gray-600">{member.designation}</p>
//             </li>
//           ))}
//         </ul>
//       </section>
//     )
// };



export default CommitteeMembers;