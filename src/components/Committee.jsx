import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ChiefPatron from "./components/Chiefpatron";
import CommitteeMembers from "./components/Committeemembers";


const Committee = () => {
    const chiefPatrons = [
        { title: "Chief Patrons",
        members: [
                    { name: "Dr. Rohini Nagapadma", designation: "Principal, The National Institute of Engineering (NIE), Mysuru" },
                    { name: "Dr. M S Ganesh Prasad", designation: "Vice Principal, The National Institute of Engineering (NIE), Mysuru" },
                ]
        }
    ];

    const committeeRoles = [
        { title: "Organizing Heads",
        "Conference":[{ name: "Name", designation: "conference" }, { name: "Name", designation: "Designation" }, { name: "Name", designation: "Designation" }],
        "Technical":[{ name: "Name", designation: "Technical" }, { name: "Name", designation: "Designation" }, { name: "Name", designation: "Designation" }],
        "Publication":[{ name: "Name", designation: "Publication" }, { name: "Name", designation: "Designation" }, { name: "Name", designation: "Designation" }],
        "Arrangements":[{ name: "Name", designation: "Arrangements" }, { name: "Name", designation: "Designation" }, { name: "Name", designation: "Designation" }],
        "Finance":[{ name: "Name", designation: "Finance" }, { name: "Name", designation: "Designation" }, { name: "Name", designation: "Designation" }],
        // members: [{ name: "Name", designation: "Designation" }, { name: "Name", designation: "Designation" }, { name: "Name", designation: "Designation" }/* Add more members */],
        // links: ["Conference", "Technical", "Publication", "Arrangements", "Finance"]
        },
        { title: "Conference Committee", 
        members: [{ name: "Name", designation: "Designation" } /* Add more members */],
        links: ["Track 1", "Track 2", "Track 3", "Track 4", "Track 5", "Track 6"]
        },
        { title: "Organizing Committee", 
        members: [{ name: "Name", designation: "Designation" }, { name: "Name", designation: "Designation" }, { name: "Name", designation: "Designation" }, { name: "Name", designation: "Designation" } /* Add more members */],
        links: ["Organizing", "Advisory", "Sustainablity", "Media", "Sponsorship", "Transport"]
        },
        { title: "Student Committee", 
        members: [{ name: "Name", designation: "Designation" }, { name: "Name", designation: "Designation" }, { name: "Name", designation: "Designation" } /* Add more members */],
        links: ["Student Committee", "Faculty Co-Ordinator"]
        },
        // Add other roles as necessary
    ];

    return (
        <div>
        <Navbar />
        {/* <section className="py-10 px-6 bg-blue-50"> */}
            <h2 className="text-2xl font-bold text-center text-blue-900 mb-6 py-10">
            Meet the Minds Behind the Mission
            </h2>
            {chiefPatrons.map((patron, index) => (
            <ChiefPatron key={index} {...patron} />
            ))}
        {/* </section> */}
        {committeeRoles.map((role, index) => (
            <CommitteeMembers key={index} role={role} />
        ))}
        <Footer />
        </div>
    );
}

export default Committee;