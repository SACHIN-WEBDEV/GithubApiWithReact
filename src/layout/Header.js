import React, { useContext, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const Header = () => {
  const context = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const Toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand>
        <Link to="/" className="text-light text-decoration-none">
          Sachin
        </Link>{" "}
      </NavbarBrand>
      <NavbarText className="text-light">
        {context.user?.email ? <div>{context.user.email}</div> : <div></div>}
      </NavbarText>
      <NavbarToggler onClick={Toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          {context.user ? (
            <NavItem>
              <NavLink
                tag={Link}
                onClick={() => {
                  context.setUser(null);
                }}
              >
                Log out
              </NavLink>
            </NavItem>
          ) : (
            <React.Fragment>
              <NavItem>
                <NavLink tag={Link} to="/signup">
                  Sign Up
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink tag={Link} to="/signin">
                  Sign In
                </NavLink>
              </NavItem>
            </React.Fragment>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
