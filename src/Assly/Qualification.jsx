import React, { useEffect } from "react";
import Educard from "../Components/Educard";
import edu_data from "../Static Data/Study";

function Qualification() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {edu_data.map((item, index) => {
        return (
          <Educard
            key={index}
            title={item.tilte}
            school={item.school}
            city={item.city}
            splz={item.splz}
            percent={item.percent}
            year={item.year}
            link={item.link}
          />
        );
      })}
    </div>
  );
}

export default Qualification;
