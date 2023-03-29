import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

const JadwalDokter = () => {
  const [show, setShow] = useState(false);
  const [doctorList, setDoctorList] = useState([
    { day: "Senin", doctors: ["Adipati Laksmana", "Jessica Pricilla"] },
    { day: "Selasa", doctors: ["Adipati Laksmana", "Jessica Pricilla"] },
    { day: "Rabu", doctors: ["Jessica Pricilla"] },
    { day: "Kamis", doctors: ["Adipati Laksmana"] },
    { day: "Jum'at", doctors: ["Adipati Laksmana", "Jessica Pricilla"] },
    { day: "Sabtu", doctors: ["Adipati Laksmana", "Jessica Pricilla"] },
  ]);
  const [newDoctor, setNewDoctor] = useState("");
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAddDoctor = () => {
    const updatedDoctorList = [...doctorList];
    updatedDoctorList[selectedDayIndex].doctors.push(newDoctor);
    setDoctorList(updatedDoctorList);
    setNewDoctor("");
    handleClose();
  };

  return (
    <div id="jadwalDokterPage">
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
              <li className="breadcrumb-item text-sm">
                <Link className="opacity-5 text-dark" to="/PoliklinikDokter">
                  Poliklinik
                </Link>
              </li>
              <li
                className="breadcrumb-item text-sm text-dark active"
                aria-current="page"
              >
                <b>Jadwal Dokter</b>
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
                  to="/Profile"
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
        <h2 id="titledashboard">Jadwal Dokter</h2>
        <div
          className="container-lg"
          style={{ border: "2px solid black", borderRadius: "7px" }}
        >
          <div className="row">
            {doctorList.map((day, index) => (
              <div key={index} className="col-md-6 p-3">
                <Card>
                  <Card.Body>
                    <Card.Title className="text-center">
                      <h3>{day.day}</h3>
                    </Card.Title>
                    <Card.Text>
                      <ul>
                        {day.doctors.map((doctor, index) => (
                          <li id="doctorName" key={index}>
                            <h5>Dr. {doctor}</h5>
                          </li>
                        ))}
                      </ul>
                    </Card.Text>
                    <div className="d-flex justify-content-center">
                      <Button
                        id="btnTambah"
                        onClick={() => {
                          setSelectedDayIndex(index);
                          handleShow();
                        }}
                      >
                        Tambah Dokter
                      </Button>
                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Tambah Dokter</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <h4>Nama Dokter</h4>
                          <input
                            type="text"
                            id="kotakinput"
                            style={{ width: "100%" }}
                            placeholder="Masukan Nama Dokter"
                            value={newDoctor}
                            onChange={(e) => setNewDoctor(e.target.value)}
                          />
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                            Close
                          </Button>
                          <Button variant="primary" onClick={handleAddDoctor}>
                            Add
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JadwalDokter;
