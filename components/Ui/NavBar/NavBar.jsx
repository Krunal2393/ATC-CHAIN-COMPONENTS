import { Button, Navbar } from "flowbite-react";
import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div>
      <Navbar fluid={false} rounded={true}>
        <Navbar.Brand href="/">
          <img
            src="/assets/images/logo/Logo-dark.png"
            className="mr-3 h-10 sm:h-9"
            alt="Flowbite Logo"
          />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button className="bg-btn-primary">Contact Us</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link as ={Link} to="/Home" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link as ={Link} to="/Product">Product</Navbar.Link>
          <Navbar.Link as ={Link} to="/Industries">Industries</Navbar.Link>
          <Navbar.Link as={Link} to="/Video">Video</Navbar.Link>
          <Navbar.Link as ={Link} to="/AboutUs">AboutUs </Navbar.Link>
          <Navbar.Link as={Link} to="/News">News</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
