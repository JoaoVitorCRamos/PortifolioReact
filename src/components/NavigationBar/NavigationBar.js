import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./NavigationBar.css";

export const NavigationBar = () => {
  return (
    <Navbar expand="lg" sticky="top" className="custom-navbar">
      <Container>
        <Navbar.Brand className="fw-bold mx-auto d-lg-none">
          João V. Costa
        </Navbar.Brand>

        <Navbar.Brand className="fw-bold d-none d-lg-block">
          João V. Costa
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
