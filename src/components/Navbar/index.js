import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/courses" activeStyle>
            Courses
          </NavLink>
          <NavLink to="/course1" activeStyle>
            Course1
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
