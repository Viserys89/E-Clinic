import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";
import TableAntrianDiagnosa from "../components/TableAntrianDiagnosa";
import TableDiagnosa from "../components/TableDiagnosa";

function SesiDiagnosa() {
  const { pilih } = useParams();
  const contohNamaPasien = "Rakansyah Lubis";
  return (
    <div id="sesiDiagnosaPage" className="mt-5">
      <div className="container-fluid">
        <h2 id="titledashboard">Sesi Diagnosa</h2>
        <div className="text-center mb-5 mt-5">
          <h2 id="titledashboard" style={{ marginLeft: "0" }}>
            {pilih}
          </h2>
          <div className="row mt-3">
            <div className="col-lg-6">
              <div className="card" style={{ border: "2px solid black" }}>
                <div className="card-body">
                  <h3>
                    Pasien yang di diagnosa : <b>{contohNamaPasien}</b>{" "}
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card" style={{ border: "2px solid black" }}>
                <div className="card-body">
                  <input
                    className="form-control form-control-lg"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Penyakit Pasien"
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TableDiagnosa />
        <div
          className="modal fade"
          id="tambahObatPasien"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <b>Tambah Obat </b>
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div id="form" className="container-fluid">
                  {/* <FormObatDiagnosa
                      {...this.state}
                      handleChange={this.handleChange}
                      handleSubmit={this.handleSubmit}
                    /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <label className="mt-2">
          <h5>
            <b>Catatan Dokter</b>
          </h5>
        </label>
        <textarea
          className="form-control mb-3"
          rows="3"
          placeholder="Masukan Catatan untuk pasien"
        ></textarea>
        <div className="text-center">
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#tambahObatPasien"
            className="btn btn-dark mx-1"
            id="btnTbh"
          >
            Tambah Obat
          </button>
          <Link to="/HasilDiagnosa">
            <button
              id="btnBerikanHasilDiagnosis"
              type="submit"
              className="btn btn-primary mx-1"
            >
              Berikan Hasil Diagnosis
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SesiDiagnosa;
