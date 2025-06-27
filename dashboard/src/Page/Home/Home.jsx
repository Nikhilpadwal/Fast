import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Home() {
  return (
    <div className="p-4 pt-0">
      <h1 className="text-center p-5 pt-3">Wellcome to Dashboard</h1>
      <Nav className="me-last  gap-2 rounded w-75 m-auto">
        <div className=" border w-100 text-end rounded-4 d-flex justify-content-between align-items-center p-2 ">
          <h5>All Product Details</h5>
          <Nav.Link
            className="text-primary btn-primary fw-bold fs-5 rounded-2"
            href="/Product"
          >
            Product
          </Nav.Link>
        </div>
        <div className="w-100 border d-flex justify-content-between align-items-center p-2 rounded-4  text-end">
          <h5>All Career Details</h5>
          <Nav.Link
            className="text-primary btn-primary fw-bold fs-5 rounded-2"
            href="/Career"
          >
            Career
          </Nav.Link>
        </div>
        <div className="w-100 border d-flex justify-content-between align-items-center p-2 rounded-4  text-end">
          <h5>All Candidate Details</h5>
          <Nav.Link
            className="text-primary btn-primary fw-bold fs-5 rounded-2"
            href="/Candidate"
          >
            Candidate
          </Nav.Link>
        </div>
        <div className="w-100 border d-flex justify-content-between align-items-center p-2 rounded-4  text-end">
          <h5>All Contact Details</h5>
          <Nav.Link
            className="text-primary btn-primary fw-bold fs-5 rounded-2"
            href="/Contact"
          >
            Contact
          </Nav.Link>
        </div>
        {/* <Nav.Link className="text-primary btn-primary fw-bold fs-5 rounded-2" href="/ShowBanner">HotProductBanner</Nav.Link>
                <Nav.Link className="text-primary btn-primary fw-bold fs-5 rounded-2" href="/ShowHomeBanner">HomePageBanner</Nav.Link> */}
        <div className="w-100 border d-flex justify-content-between align-items-center p-2 rounded-4  text-end">
          <h5>All Blog Details</h5>
          <Nav.Link
            className="text-primary btn-primary fw-bold fs-5 rounded-2"
            href="/BlogPage"
          >
            Blog
          </Nav.Link>
        </div>
      </Nav>
    </div>
  );
}

export default Home;
