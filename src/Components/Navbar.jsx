import React, { useEffect, useState } from "react";
import NavMenu from "./Sub Components/NavMenu";
import Navsearch from "./Sub Components/Navsearch";
import NavLogo from "./Sub Components/NavLogo";
import "./Navbar.css";
import Navoption from "./Sub Components/Navoption";


function Navbar() {
  const [option, setoption] = useState(false);

  let toggler = () => {
    if (window.innerWidth > 786) {
      return setoption(true);
    }
  };

  useEffect(toggler, []);

  return (
    <>
      <nav>
        <NavLogo />
        {option ? <NavMenu /> : <Navoption />}
        {option && <Navsearch />}        
      </nav>
    </>
  );
}

export default Navbar;
