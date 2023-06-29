// eslint-disable-next-line import/no-extraneous-dependencies
import {Navbar, Nav} from 'react-bootstrap'
// eslint-disable-next-line import/no-extraneous-dependencies
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const CustomNavbar = () => {
  const logoUrl =
    'https://w7.pngwing.com/pngs/590/292/png-transparent-computer-icons-hamburger-button-icon-design-web-typography-bar-icon-angle-rectangle-navigation-bar.png'

  return (
    <Navbar bg="light" expand="lg" className="navbar-container">
      <Navbar.Brand href="#home">
        <img src={logoUrl} alt="Navbar Logo" className="navLogo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          <Nav.Link href="/" className="nav-link">
            Home
          </Nav.Link>
          <Nav.Link href="/about" className="nav-link">
            About Us
          </Nav.Link>
          <Nav.Link href="/projects" className="nav-link">
            Projects
          </Nav.Link>
          <Nav.Link href="/blog" className="nav-link">
            Blog
          </Nav.Link>
          <Nav.Link href="/contact" className="nav-link">
            Contact Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default CustomNavbar
