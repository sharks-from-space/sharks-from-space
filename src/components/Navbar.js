import { useLocation } from "react-router-dom";
import { useState } from "react"; // 👈 ajouté
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import Patch from "../images/patch.png";

export function WebsiteNavbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // 👈 ajouté

  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".Navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  return (
    <Navbar className="Navbar" sticky="top">
      <Container>
        <Nav className="Nav">
          {/* Logo à gauche */}
          <Nav.Link
            className={`Nav-link-logo ${location.pathname === "/" ? "active" : ""}`}
            href="/"
          >
            <img src={Patch} alt="Signature logo" className="Nav-logo" />
          </Nav.Link>

          {/* Bouton hamburger */}
          <button
            className="Nav-hamburger"
            onClick={() => setIsOpen(!isOpen)}
          >
            Menu
          </button>

          {/* Liens du menu */}
          <div className={`Nav-links ${isOpen ? "open" : ""}`}>
            <Nav.Link className={`Nav-link ${location.pathname === "/" ? "active" : ""}`} href="/">Home</Nav.Link>
            <Nav.Link className={`Nav-link ${location.pathname === "/research" ? "active" : ""}`} href="/#/research">Research</Nav.Link>
            <Nav.Link className={`Nav-link ${location.pathname === "/about-sharks" ? "active" : ""}`} href="/#/about-sharks">About Sharks</Nav.Link>
            <Nav.Link className={`Nav-link ${location.pathname === "/resources" ? "active" : ""}`} href="/#/resources">Resources</Nav.Link>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
}