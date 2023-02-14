import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

const Forms = ({
  nama,
  alamat,
  perkerjaan,
  golongandarah,
  nik,
  email,
  handleChange,
  handleSubmit,
}) => {
  return (
    <div className="Mt-5">
      <Row>
        <Col>
          <h2 id="titleregistrasi">Registrasi</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-1" controlId="golongandarah">
              <Form.Label>NIK</Form.Label>
              <Form.Control
                type="text"
                name="nik"
                value={nik}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="nama">
              <Form.Label>Nama</Form.Label>
              <Form.Control
                type="text"
                name="nama"
                value={nama}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="alamat">
              <Form.Label>Alamat</Form.Label>
              <Form.Control
                type="text"
                name="alamat"
                value={alamat}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="perkerjaan">
              <Form.Label>Perkerjaan</Form.Label>
              <Form.Control
                type="text"
                name="perkerjaan"
                value={perkerjaan}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="golongandarah">
              <Form.Label>Golongan Darah</Form.Label>
              <Form.Control
                type="text"
                name="golongandarah"
                value={golongandarah}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="golongandarah">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                value={email}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <Button className="btn btn-primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Forms;
