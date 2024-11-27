const ChiefPatron = ({title, members}) => {
    return (
        <section className="bg-white py-10 px-40">
          {/* <h2 className="text-2xl font-bold text-center text-blue-900 mb-8">{title}</h2> */}
          {/* <Navbar key={title} links={links}/> */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-20 py-10 px-80">
            {members.map((member, index) => (
              <li
                key={index}
                className="bg-gray-50 shadow-md p-7 rounded-lg text-center"
              >
                <h4 className="text-lg font-semibold text-gray-800">{member.name}</h4>
                <p className="text-gray-600">{member.designation}</p>
              </li>
            ))}
          </ul>
        </section>
        )
    };

export default ChiefPatron
