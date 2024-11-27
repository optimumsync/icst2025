import React from "react";
import "./RegistrationPage.css"; // Include this CSS file

const RegistrationPage = () => {
  return (
    <div className="registration-container">
      <h1 className="title">Registration</h1>

      {/* Categories Section */}
      <div className="categories">
        <div className="category-card">
          <h3>Academic</h3>
          <p>UG/PG/PhD Scholar/Faculty from India</p>
          <h2>₹ 6000</h2>
          <button>Choose</button>
        </div>
        <div className="category-card">
          <h3>Industry</h3>
          <p>Industry Professional from India</p>
          <h2>₹ 7500</h2>
          <button>Choose</button>
        </div>
        <div className="category-card">
          <h3>Non-resident</h3>
          <p>Foreign Authors (UG/PG/PhD Scholar/Faculty/Industry)</p>
          <h2>$ 200</h2>
          <button>Choose</button>
        </div>
      </div>
      <div className="dotted-line"></div>
      {/* Additional Information */}
      <div className="info-card">
        <h1 className="text-center">Additional Information</h1>
        <p className="text-center">
          <strong>*All the pricing details mentioned above are inclusive of 18% GST</strong>
        </p>
        <h3 className="my-3"><strong>Accommodation Fees:</strong></h3>
        <ul className="ms-3">
          <li>Indian Participants: INR 1000 per person per day</li>
          <li>Foreign Participants: USD 20 per person per day</li>
        </ul>
        <h3 className="my-3"><strong>Account Details:</strong></h3>
        <ul className="ms-3">
          <li>Beneficiary Name: The National Institute of Engineering</li>
          <li>Bank Name: HDFC Bank Ltd.</li>
          <li>Account No: 5010042365671</li>
          <li>RTGS/NEFT IFSC: HDFC0004568</li>
          <li>Account Branch: R K Mohalla - Mysuru</li>
        </ul>
        <h3 className="my-3"><strong>Instructions for Registration:</strong></h3>
        <ul className="ms-3">
          <li>At least one author per accepted paper has to register.</li>
          <li>
            At least one author must present their accepted paper in the conference for consideration of publication on
            IEE Explore.
          </li>
          <li>
            Registration fee for the paper (with authorship) includes access to conference proceedings, all technical
            sessions, and a presenter certificate.
          </li>
          <li>
            Registration fee for conference participation without authorship: attendees are not entitled to paper
            publication; however, a participation certificate will be provided.
          </li>
        </ul>
      

      {/* Important Notice */}
        <div className="dotted-line"></div>
      
        <h1 className="text-center my-3">Important Notice</h1>
        <ul className="ms-3">
          <li>Registration category should be chosen appropriately from the aforementioned table.</li>
          <li>Registration fees are not refundable or transferable.</li>
          <li>
            You must save the payment proof in PDF with UTR number. This payment proof file is to be attached in a
            section while filling the registration form.
          </li>
          <li>
            ICT-2025 organizing committee will not be responsible for any financial loss caused by improper
            transactions during the registration process in ICT-2025.
          </li>
          <li>
            The author's name(s) must match the ones provided during the manuscript submission and registration (There
            should be one/same name at all stages of the conference).
          </li>
          <li>
            The submission of invalid proofs will lead to the cancellation of participation in the conference.
          </li>
        </ul>
    
        <div className="dotted-line"></div>
      {/* Important Dates */}
     
        <h1 className="text-center my-3">Important Dates</h1>
        <div className="timeline">
          <div className="timeline-item">
            <p>19th October 2024</p>
            <span>Submission of Full-length Manuscript (opens from)</span>
          </div>
          <div className="timeline-item">
            <p>15th December 2024</p>
            <span>Last date to submit Full-length Manuscript</span>
          </div>
          <div className="timeline-item">
            <p>15th January 2025</p>
            <span>Notification of Acceptance</span>
          </div>
          <div className="timeline-item">
            <p>15th - 30th January 2025</p>
            <span>Submission of Camera-ready Manuscript and Copyright form</span>
          </div>
          <div className="timeline-item">
            <p>15th - 30th January 2025</p>
            <span>Registration Dates</span>
          </div>
          <div className="timeline-item">
            <p>25th January 2025</p>
            <span>Last Date for Registration</span>
          </div>
          <div className="timeline-item">
            <p>19th and 20th February 2025</p>
            <span>Conference Dates</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
