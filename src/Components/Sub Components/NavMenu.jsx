import React from "react";
import './NavMenu.css'

const links = ["Home", "About", "Portfolio", "Contact"];

function NavMenu() {
  
  return (
    <>
      <div className="menu flex">
        {links.map((item, index) => {
          return <span key={index}><a href={`#${item}`}>{item}</a></span>;
        })}
      </div>
    </>
  );
}

export default NavMenu;
