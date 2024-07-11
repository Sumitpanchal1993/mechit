import React from "react";
import Logo from "../../Media/Logo.png";
import './NavLogo.css'

function NavLogo() {
  return (
    <>
      <div className="logo flex">
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        {/* <div>
          <h3>Sumit</h3>
        </div> */}
      </div>
    </>
  );
}

export default NavLogo;
