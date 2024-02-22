import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="cont_base">
      <div className="cont_head">
        <p>Contact Me!!!</p>
        <hr />
      </div>
      <div className="cont_data">
        {/* <span class="material-symbols-outlined">phone_iphone</span> */}
        <p>
          <span class="material-symbols-outlined">call</span>
          Mobile No.: <a href="tel:8349102532">+91 8349102532</a>
        </p>
        <p>
          <span class="material-symbols-outlined">call</span>
          Alt. Mobile: <a href="tel:8349102532">+91 7828314018</a>
        </p>
      </div>

      <div className="cont_data">
        {/* <span class="material-symbols-outlined">mail</span> */}
        <p>
          <span class="material-symbols-outlined">mail</span>
          Email ID:{" "}
          <a href="mailto: sumitpanchal08@gmail.com ">
            sumitpanchal08@gmail.com{" "}
          </a>
        </p>
        <p>
          <span class="material-symbols-outlined">mail</span>
          Alternate Email:
          <a href="mailto: sumitpanchal990@gmail.com ">
            sumitpanchal990@gmail.com{" "}
          </a>{" "}
        </p>
      </div>

      <a href="Resume Sumit Panchal.pdf" download={"Resume Sumit.pdf"}>
        <button>
          <span> Download Resume</span>
        </button>
      </a>
    </div>
  );
}

export default Contact;
