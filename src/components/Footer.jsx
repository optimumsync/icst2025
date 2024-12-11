import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
  return (
    <div className="bg-gogreen3 text-white box-content p-2 md:self-center">
      <div className="md:flex md:mx-10">
        {/* <span>Footer</span> */}
        {/* <Gmap/> */}
        <div className="md:w-1/3 my-3">
          <h2 className="text-2xl font-bold text-center md:text-left my-2">
            ICST - 2025
          </h2>
          {/* <div className='text-xl'>International Conference for Sustainable Technology 2025</div> */}
          <div className="text-md font-bold">Connect With Us</div>
          <div className="text-xl font-bold space-x-1">
            <FacebookIcon fontSize="large" />
            <InstagramIcon fontSize="large" />
            <XIcon fontSize="large" />
            <LinkedInIcon fontSize="large" />
          </div>
        </div>
        <div className="md:flex my-3">
          <div className="md:p-3">
            <div className="flex">
              <LocationOnIcon className="self-center me-2" fontSize="large" />
              <span>
                NIE, Mananthavadi Rd, Vidyaranyapura, Mysuru, Karnataka 570008{" "}
              </span>
            </div>
            <div className="flex">
              <PhoneIcon className="self-center me-2" fontSize="large" />
              <div className="flex flex-col">
              <span className="self-center">+91 99726 95511</span>
              <span className="self-center">+91 81054 73206</span>
              <span className="self-center">+91 98606 03195</span>
              </div>
            </div>
            <div className="flex">
              <EmailIcon className="self-center me-2" fontSize="large" />
              <a
                className="self-center"
                href="mailto:icst-nie2025+general@nie.ac.in"
              >
                {" "}
                icst-nie2025+general@nie.ac.in{" "}
              </a>
            </div>
          </div>
          <div className="flex justify-center p-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7796.948445373849!2d76.6351021963735!3d12.2838184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf65561e102919%3A0xf947b18cc5ad3d88!2sThe%20National%20Institute%20of%20Engineering%20South%20Campus%20(NIE%20South)!5e0!3m2!1sen!2sin!4v1732210375511!5m2!1sen!2sin"
              width="300"
              height="200"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="md:flex md:justify-between">
      <p className="py-2 md:order-2">
        Developed and maintained by <a href="https://optimumsync.com" className="text-blue-300">Optimum Sync</a>
      </p>
      <p className="font-medium py-2 md:order-1">
        Copyrights &copy; 2024 The National Institute of Engineering, Mysuru.
        All rights reserved.
      </p>
      </div>
    </div>
  );
}

export default Footer;
