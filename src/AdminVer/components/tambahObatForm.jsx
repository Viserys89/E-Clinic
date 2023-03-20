import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

const tambahObatForm = ({
  namaObat,
  sediaanObat,
  stockObat,
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
            <Form.Group className="mb-1" controlId="sediaanObat">
              <Form.Label>Sediaan</Form.Label>
              <Form.Control
                type="text"
                name="sediaanObat"
                value={sediaanObat}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="stockObat">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="text"
                name="stockObat"
                value={stockObat}
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

export default tambahObatForm;
