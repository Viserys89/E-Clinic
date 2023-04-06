import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

const FormObatDiagnosa = ({
  namaObat,
  jumlahObat,
  hargaObat,
  handleChange,
  handleSubmit,
  Id,
}) => {
  return (
    <div className="Mt-5">
      <Row>
        <Col>
          <h2 id="titleregistrasi"> {Id ? "Edit Data" : "Tambah Data"}</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-1" controlId="namaObat">
              <Form.Label>Nama Obat</Form.Label>
              <Form.Control
                type="text"
                name="namaObat"
                value={namaObat}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="jumlahObat">
              <Form.Label>Jumlah</Form.Label>
              <Form.Control
                type="text"
                name="jumlahObat"
                value={jumlahObat}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="hargaObat">
              <Form.Label>Harga</Form.Label>
              <Form.Control
                type="text"
                name="hargaObat"
                value={hargaObat}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Button id="btnSubmit" className="btn mt-3" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default FormObatDiagnosa;
