import Profile from "../assets/profile.svg";

const ChiefPatron = ({title, members}) => {
    return (
        <section className="bg-white py-5 px-40">
          {/* <h2 className="text-2xl font-bold text-center text-blue-900 mb-8">{title}</h2> */}
          {/* <Navbar key={title} links={links}/> */}
          <ul className="flex justify-center flex-wrap gap-x-12 gap-y-12 py-5">
            {members.map((member, index) => (
              <li
                key={index}
                className="basis-1/3 bg-gray-50 shadow-md p-7 rounded-lg text-center"
              >
                <img src={Profile} alt="Profile" className="w-20 h-20 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-800">{member.name}</h4>
                <p className="text-gray-600">{member.designation}</p>
              </li>
            ))}
          </ul>
        </section>
        )
    };

export default ChiefPatron
