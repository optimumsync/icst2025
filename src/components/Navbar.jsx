// import React, { useState } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//     <nav className="text-slate bg-gogreen shadow text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center h-16">

//           <div className="items-center">
//             <a href="/" className="text-2xl flex flex-col font-bold">
//             <img src={Logo} alt="Logo" className="w-24"/>
//               ICST
//             </a>
//           </div>

//           <div className="hidden w-full md:flex justify-around">
//             <a href="#" className="hover:text-gray-300">
//               Home
//             </a>
//             <a href="#" className="hover:text-gray-300">
//               About
//             </a>
//             <a href="#" className="hover:text-gray-300">
//               Services
//             </a>
//             <a href="#" className="hover:text-gray-300">
//               Contact
//             </a>
//           </div>

//           {/* <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-200 hover:text-gray-400 focus:outline-none"
//             >
//               <svg
//                 className="h-6 w-6"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//                 />
//               </svg>
//             </button>
//           </div> */}

//         </div>
//       </div>
//       {/* Mobile menu */}
//       {isOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
//               Home
//             </a>
//             <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
//               About
//             </a>
//             <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
//               Services
//             </a>
//             <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
//               Contact
//             </a>
//           </div>
//         </div>
//       )}
//     </nav>

//     {/* <nav className="flex bg-red-200 h-16 justify-between">
//         <div className="flex">
//             <div><img width={"200px"} className="m-2 max-w-24" src={Logo}/></div>
//             <h2 className="text-3xl font-bold self-center">ICST</h2>
//         </div>
//         <div className="w-full hidden md:flex self-center font-semibold justify-around mx-5">
//             <a>Home</a>
//             <a>About</a>
//             <a>Committee</a>
//             <a>Call For Papers</a>
//             <a>Track</a>
//             <a>Registration</a>
//             <a>Conclave</a>
//             <a>Contact Us</a>
//         </div>
//         <div className="md:hidden self-center me-5">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-200 hover:text-gray-400 focus:outline-none"
//             >
//               <svg
//                 className="h-6 w-6"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//                 />
//               </svg>
//             </button>
//           </div>
//     </nav> */}
//     </>
//   );
// };

// export default Navbar;
