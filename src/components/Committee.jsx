import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ChiefPatron from "./Chiefpatron";
import CommitteeMembers from "./Committeemembers";


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
        { 
            title: "Conference Committee",
            "Track1": [{ name: "Name1", designation: "Designation" }],
            "Track2": [{ name: "Name2", designation: "Designation" }],
            "Track3": [{ name: "Name3", designation: "Designation" }],
            "Track4": [{ name: "Name4", designation: "Designation" }],
            "Track5": [{ name: "Name5", designation: "Designation" }],
            "Track6": [{ name: "Name6", designation: "Designation" }],
        },
        { 
            title: "Organizing Committee",
            "Organizing":[{ name: "Name", designation: "Designation" }, { name: "Name", designation: "Designation" }, { name: "Name", designation: "Designation" }, { name: "Name", designation: "Designation" }],
            "Advisory":[{ name: "Name", designation: "Designation" }, { name: "Name", designation: "Designation" }, { name: "Name", designation: "Designation" }, { name: "Name", designation: "Designation" }],
            "Sustainablity":[{ name: "Name", designation: "Designation" }, { name: "Name", designation: "Designation" }, { name: "Name", designation: "Designation" }, { name: "Name", designation: "Designation" }],
            "Media":[{ name: "Name", designation: "Designation" }, { name: "Name", designation: "Designation" }, { name: "Name", designation: "Designation" }, { name: "Name", designation: "Designation" }],
            "Sponsorship":[{ name: "Name", designation: "Designation" }, { name: "Name", designation: "Designation" }, { name: "Name", designation: "Designation" }, { name: "Name", designation: "Designation" }],
            "Transport":[{ name: "Name", designation: "Designation" }, { name: "Name", designation: "Designation" }, { name: "Name", designation: "Designation" }, { name: "Name", designation: "Designation" }],
        },
        { 
            title: "Student Committee",
            "Student Committee": [{ name: "Name", designation: "Designation" }, { name: "Name", designation: "Designation" }, { name: "Name", designation: "Designation" },{ name: "Name", designation: "Designation" }, { name: "Name", designation: "Designation" }, { name: "Name", designation: "Designation" },{ name: "Name", designation: "Designation" }, { name: "Name", designation: "Designation" }, { name: "Name", designation: "Designation" }],
            "Faculty Co-Ordinator": [{ name: "Name", designation: "Designation" }, { name: "Name", designation: "Designation" }, { name: "Name", designation: "Designation" },{ name: "Name", designation: "Designation" }, { name: "Name", designation: "Designation" }, { name: "Name", designation: "Designation" },{ name: "Name", designation: "Designation" }, { name: "Name", designation: "Designation" }, { name: "Name", designation: "Designation" }],
        },
        // Add other roles as necessary
    ];

    return (
        <div>
        <Navbar />
        {/* <section className="py-10 px-6 bg-blue-50"> */}
            <h2 className="text-2xl font-bold text-center text-go-green mb-6 py-10 ">
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