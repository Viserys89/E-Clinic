import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Button, Container } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const Announcement = () => {
  return (
    <div id="announcementPage">
      <nav
        className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
        id="navbarBlur"
        navbar-scroll="true"
      >
        <div className="container-fluid py-1 px-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
              <li className="breadcrumb-item text-sm">
                <Link className="opacity-5 text-dark" to="/DashBoard">
                  Pages
                </Link>
              </li>
              <li
                className="breadcrumb-item text-sm text-dark active"
                aria-current="page"
              >
                <b>Poliklinik</b>
              </li>
            </ol>
          </nav>
          <div
            className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
            id="navbar"
          >
            <div className="ms-md-auto pe-md-3 d-flex align-items-center"></div>
            <ul className="navbar-nav  justify-content-end">
              <li className="nav-item d-flex align-items-center">
                <i className="fa fa-bell cursor-pointer mx-lg-2 " />
                <Link
                  to="/ProfileAdmin"
                  className="nav-link text-body  font-weight-bold px-0"
                >
                  <span className="d-sm-inline d-none m-lg-2">Admin</span>
                  <i className="fa fa-user me-sm-1 ml-2" />
                </Link>
              </li>
              <li className="nav-item px-3 d-flex align-items-center">
                <a href="javascript:;" className="nav-link text-body p-0">
                  <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid">
        <h2 id="titledashboard">Announcement</h2>
        <div className="container-lg d-flex justify-content-center">
          <Card style={{ width: "30rem", border: "2px solid black" }}>
            <Card.Body>
              <Card.Title style={{ borderBottom: "1px solid black" }}>
                Tambahkan Announcement <i className="fas fa-bell mx-2"></i>
              </Card.Title>
              <Container lg className="p-lg-2 mt-lg-1">
                <div
                  style={{
                    border: "1px solid black",
                    minHeight: "150px",
                  }}
                >
                  <FloatingLabel
                    controlId="floatingTextarea2"
                    label="Announcement"
                  >
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "150px" }}
                    />
                  </FloatingLabel>
                </div>
                <div className="d-flex justify-content-center">
                  <Button id="btnTambah">Tambah</Button>
                </div>
              </Container>
            </Card.Body>
          </Card>
        </div>
        <div className="container-lg d-flex justify-content-center mt-lg-3">
          <Card
            style={{
              width: "30rem",
              border: "2px solid black",
              marginBottom: "20px",
            }}
          >
            <Card.Body>
              <Card.Title style={{ borderBottom: "1px solid black" }}>
                Announcement Box <i className="fas fa-bell mx-2"></i>
              </Card.Title>
              <Card.Text>
                <ul>
                  <li>Klinik THT</li>
                  <li>Hari Senin Libur</li>
                  <li>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eius, repudiandae!
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
