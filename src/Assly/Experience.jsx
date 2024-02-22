import React from "react";
import ExperienceCard from "../Components/ExperienceCard";
import exp_detail from "../Static Data/Exp";

function Experience() {
  return (
    <>
      <div className="exp_base">
        {exp_detail.map((item, index) => {
          return (
            <ExperienceCard
              companyName={item.comp_name}
              companyDetail={item.about}
              companyJoin={item.join}
            />
          );
        })}
      </div>
    </>
  );
}

export default Experience;
