import PropTypes from "prop-types"
import React, { useState } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const Header = ({ siteTitle }) => {
   const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="#fc9" light expand="md">
        <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
          <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Personal Blog
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/ziyah-blog/">
                Aziyah's Blog
                </DropdownItem>
                <DropdownItem href="/haqqi-blog/">
                Bay Haqqi's Blog
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            </NavItem>
            <NavItem>
              <NavLink href="/page-2/">About</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>WADT</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
  
  }

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
