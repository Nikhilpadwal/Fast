import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">
          <img src="http://localhost:3000/static/media/logo%20fentan.9a4e67cf4dd18d806d55.png" alt="" style={{width: "100px"}} /></Navbar.Brand>
          <Nav className="me-last">
            <Nav.Link className="text-white" href="/">Home</Nav.Link>
            <Nav.Link className="text-white" href="/Product">Product</Nav.Link>
            <Nav.Link className="text-white" href="/Career">Career</Nav.Link>
            <Nav.Link className="text-white" href="/Candidate">Candidate</Nav.Link>
            <Nav.Link className="text-white" href="/Contact">Contact</Nav.Link>
            {/* <Nav.Link className="text-white" href="/ShowBanner">HotProductBanner</Nav.Link>
            <Nav.Link className="text-white" href="/ShowHomeBanner">HomePageBanner</Nav.Link> */}
            <Nav.Link className="text-white" href="/BlogPage">Blog</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
