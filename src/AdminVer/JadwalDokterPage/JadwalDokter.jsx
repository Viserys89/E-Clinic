import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const JadwalDokter = () => {
  const [show, setShow] = useState(false);
  const [doctorList, setDoctorList] = useState(["Adipati Laksmana", "Jessica Pricilla"]);
  const [newDoctor, setNewDoctor] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAddDoctor = () => {
    setDoctorList([...doctorList, newDoctor]);
    setNewDoctor("");
    handleClose();
  }

  return (
    <div id="jadwalDokterPage">
      <div className="container-fluid">
        <h2 id="titledashboard">Jadwal Dokter</h2>
        <div
          className="container-lg"
          style={{ border: "2px solid black", borderRadius: "7px" }}
        >
          <div className="row">
            <div className="col-md-6 p-3">
              <Card>
                <Card.Body>
                  <Card.Title className="text-center">
                    <h3>Senin</h3>
                  </Card.Title>
                  <Card.Text>
                    <ul>
                      {doctorList.map((doctor, index) => (
                        <li id="doctorName" key={index}>
                          <h5>Dr. {doctor}</h5>
                        </li>
                      ))}
                    </ul>
                  </Card.Text>
                  <div className="d-flex justify-content-center">
                    <Button id="btnTambah" onClick={handleShow}>
                      Tambah Dokter
                    </Button>
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Tambah Dokter</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <input type="text" value={newDoctor} onChange={(e) => setNewDoctor(e.target.value)} />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default JadwalDokter;