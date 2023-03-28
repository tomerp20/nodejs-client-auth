import  { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./../Context/AuthContext";

function NavBar() {
  const { isLoggedIn, signOut } = useContext(AuthContext);

  const signUserOut = () => signOut()

  

  return (
    <Container className="navControl">
      <Navbar className="nav px-5" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          {isLoggedIn ? (
              <>
                <Nav.Link
                  style={{ textDecoration: "none" }}
                  className="navLink navHome"
                  to="/"
                  as={NavLink}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  style={{ textDecoration: "none" }}
                  className="navLink mx-5"
                  to="/profile"
                  as={NavLink}
                >
                  Profile
                </Nav.Link>
                <Nav.Link
                  style={{ textDecoration: "none" }}
                  className="navLink mx-5"
                  to="/login"
                  onClick={signUserOut}
                  as={NavLink}
                >
                  Logout
                </Nav.Link>
              </>
            ) : (
              <Nav.Link
                style={{ textDecoration: "none" }}
                className="navLink mx-5"
                to="/login"
                as={NavLink}
              >
                Login
              </Nav.Link>
            )}
           
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default NavBar;
