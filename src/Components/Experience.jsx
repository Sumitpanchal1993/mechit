import React from "react";
import ExpCard from "./Sub Components/ExpCard";
import "./Experience.css";

const exp_detail = [
  {
    id: 1,
    comp_name: "Vagaro Technologies",
    location: "Pune ",
    about:
      " Techium InfoTech is a leading software company providing the services of E-Commerce Development, Custom Web Development, Software Maintenance, Software Enhancement, Software Testing and various IT related supports and solution provider",
    post: "Front End Developer",
    role: "Create the Front end UI",
    year: 2023,
  },
  {
    id: 2,
    comp_name: "Techium InfoTech Pvt. Ltd.",
    location: "Pune Maharashtra",
    about:
      " Techium InfoTech is a leading software company providing the services of E-Commerce Development, Custom Web Development, Software Maintenance, Software Enhancement, Software Testing and various IT related supports and solution provider",
    post: "Front End Developer",
    role: "Create the Front end UI",
    year: 2023,
  },
  {
    id: 3,
    comp_name: "Techium InfoTech Pvt. Ltd.",
    location: "Pune Maharashtra",
    about:
      " Techium InfoTech is a leading software company providing the services of E-Commerce Development, Custom Web Development, Software Maintenance, Software Enhancement, Software Testing and various IT related supports and solution provider",
    post: "Front End Developer",
    role: "Create the Front end UI",
    year: 2023,
  },
  
];

export default function Experience() {
  return (
    <>
      <div className="expBase flex">
        <h2>Experience</h2>
        {exp_detail.map((item) => {
          return <ExpCard  item ={item} />;
        })}
      </div>
    </>
  );
}
