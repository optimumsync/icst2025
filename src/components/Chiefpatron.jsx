const ChiefPatron = ({ title, members }) => {
    return (
        <section className="bg-white py-10 px-6 md:px-10 lg:px-20">
            {/* Uncomment if you want to display the title */}
            {/* <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-8">{title}</h2> */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                {members.map((member, index) => (
                    <li
                        key={index}
                        className="bg-gray-50 shadow-md p-6 md:p-8 rounded-lg text-center"
                    >
                        <h4 className="text-lg md:text-xl font-semibold text-gray-800">
                            {member.name}
                        </h4>
                        <p className="text-gray-600 text-sm md:text-base">
                            {member.designation}
                        </p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ChiefPatron;
